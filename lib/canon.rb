require 'compass'
require 'sprockets'
require 'sprockets/sass'

module Canon
  class << self
    def configure!
      Compass.configuration do |c|
        c.project_path = library_path
        c.images_dir = 'images'
        c.javascripts_dir = 'javascripts'
        c.sass_dir = 'stylesheets'
      end

      nil
    end

    def sprockets
      @environment ||= Sprockets::Environment.new.tap do |e|
        e.append_path(File.expand_path('images', library_path))
        e.append_path(File.expand_path('javascripts', library_path))
        e.append_path(File.expand_path('stylesheets', library_path))
      end
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
  end
end

Canon.configure!
