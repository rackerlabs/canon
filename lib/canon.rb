require 'compass'
require 'rack'
require 'rack/contrib/not_found'
require 'rack/contrib/try_static'
require 'sprockets'
require 'sprockets/sass'

module Canon
  MAJOR = 1
  MINOR = 0
  PATCH = 0
  PRE = 'rc.3'

  class << self
    def version
      version = [MAJOR, MINOR, PATCH].join('.')
      if PRE
        version += "-#{PRE}"
      end

      version
    end

    def configure!
      Compass.configuration do |c|
        c.project_path = library_path
        c.images_path = images_path
        c.javascripts_path = javascripts_path
        c.sass_path = stylesheets_path
        c.relative_assets = true

        c.add_import_path(bower_path)
      end

      nil
    end

    def app
      @app ||= Rack::Builder.new do
        not_found = lambda { |env| [404, { 'Content-Type' => 'text/plain' }, ['Not Found']] }

        use Rack::Lint
        use Rack::CommonLogger
        use Rack::TryStatic, {
          urls: [''],
          root: Canon.examples_path,
          index: 'index.html'
        }

        map '/assets' do
          run Canon.assets
        end

        map '/components' do
          run Rack::TryStatic.new(not_found, {
            urls: [''],
            root: File.join(Canon.root_path, 'components')
          })
        end

        map '/vendor' do
          run Rack::TryStatic.new(not_found, {
            urls: [''],
            root: File.join(Canon.root_path, 'node_modules')
          })
        end
      end
    end

    def assets
      @environment ||= Sprockets::Environment.new.tap do |e|
        e.append_path(images_path)
        e.append_path(javascripts_path)
        e.append_path(stylesheets_path)
        e.append_path(fonts_path)
        e.append_path(bower_path)
      end
    end

    def environment
      ENV['CANON_ENV'] || 'development'
    end

    def test?
      environment == 'test'
    end

    def root_path
      File.expand_path('../..', __FILE__)
    end

    def build_path
      File.join(root_path, 'build')
    end

    def bower_path
      File.join(root_path, 'components')
    end

    def examples_path
      File.join(root_path, 'examples')
    end

    def library_path
      File.join(root_path, 'lib')
    end

    def fonts_path
      File.join(library_path, 'fonts')
    end

    def images_path
      File.join(library_path, 'images')
    end

    def javascripts_path
      File.join(library_path, 'javascripts')
    end

    def stylesheets_path
      File.join(library_path, 'stylesheets')
    end

    def package_path
      File.join(root_path, 'package')
    end

    def screenshot_path
      File.join(root_path, 'spec', 'screenshot')
    end
  end
end

Canon.configure!
