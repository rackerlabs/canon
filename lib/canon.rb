require 'compass'
require 'rack'
require 'rack/contrib/try_static'
require 'sprockets'
require 'sprockets/sass'

module Canon
  VERSION = '0.1.0'

  class << self
    def configure!
      Compass.configuration do |c|
        c.project_path = library_path
        c.images_dir = 'images'
        c.javascripts_dir = 'javascripts'
        c.sass_dir = 'stylesheets'
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
  end
end

Canon.configure!
