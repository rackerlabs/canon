require 'compass'
require 'susy'
require 'rack'
require 'rack/contrib/not_found'
require 'rack/contrib/try_static'
require 'sprockets'
require 'sprockets/sass'

module Canon
  VERSION = '0.0.0'

  class << self
    def configure!
      Compass.configuration do |c|
        c.project_path = library_path
        c.images_path = images_path
        c.javascripts_path = javascripts_path
        c.sass_path = stylesheets_path
        c.relative_assets = true
      end

      nil
    end

    def app
      @app ||= Rack::Builder.new do
        use Rack::Lint
        use Rack::CommonLogger
        use Rack::TryStatic, {
          urls: [''],
          root: Canon.examples_path,
          index: 'index.html'
        }

        map '/assets' do
          run Canon.sprockets
        end

        map '/screenshots' do
          use Rack::TryStatic, {
            urls: [''],
            root: Canon.screenshot_path
          }

          run lambda { |env| [404, { 'Content-Type' => 'text/plain' }, ['Not Found']] }
        end

        map '/test' do
          run Rack::File.new(File.join(Canon.root_path, 'spec/unit/runner.html'))
        end
      end
    end

    def sprockets
      @environment ||= Sprockets::Environment.new.tap do |e|
        e.append_path(File.expand_path('images', library_path))
        e.append_path(File.expand_path('javascripts', library_path))
        e.append_path(File.expand_path('stylesheets', library_path))

        e.append_path(File.expand_path('node_modules', root_path))
        e.append_path(File.expand_path('spec/unit', root_path))
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

    def examples_path
      File.join(root_path, 'examples')
    end

    def library_path
      File.join(root_path, 'lib', 'canon')
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
