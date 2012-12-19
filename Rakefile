require 'compass'
require 'sprockets'
require 'sprockets/sass'

Compass.configuration do |c|
  c.project_path = File.expand_path('lib/canon', Dir.pwd)
  c.images_dir = 'images'
  c.javascripts_dir = 'javascripts'
  c.sass_dir = 'stylesheets'
end

namespace :lint do
  desc 'Lint javascripts with JSHint'
  task :javascripts do
    system('node_modules/.bin/jshint lib/canon/javascripts/ --show-non-errors')
  end

  desc 'Lint stylesheets with Recess'
  task :stylesheets do
    Rake::Task['assets:compile'].invoke
    system('node_modules/.bin/csslint build/*.css --quiet')
    Rake::Task['assets:clean'].invoke
  end
end

namespace :assets do
  sprite_path = File.join(Dir.pwd, 'lib/canon/images')
  build_path = File.join(Dir.pwd, 'build')
  environment = Sprockets::Environment.new(Dir.pwd)
  environment.append_path(File.join(Dir.pwd, 'lib/canon/images'))
  environment.append_path(File.join(Dir.pwd, 'lib/canon/javascripts'))
  environment.append_path(File.join(Dir.pwd, 'lib/canon/stylesheets'))
  environment.append_path(File.join(Dir.pwd, 'vendor'))
  manifest = Sprockets::Manifest.new(environment, build_path)

  desc 'Compile all assets'
  task :compile do
    manifest.compile('canon.js', 'canon.css')
    FileList[sprite_path + '/*.png'].each do |sprite|
      FileUtils.copy(sprite, build_path)
    end
  end

  desc 'Clean compiled assets'
  task :clean do
    manifest.clobber
  end
end
