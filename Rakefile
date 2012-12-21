require 'compass'
require 'sprockets'
require 'sprockets/sass'
require File.expand_path('../lib/canon', __FILE__)

namespace :lint do
  desc 'Lint javascripts with JSHint'
  task :javascripts do
    system('node_modules/.bin/jshint lib/canon/javascripts/ --show-non-errors')
  end

  desc 'Lint stylesheets with Recess'
  task :stylesheets => 'assets:compile' do
    system('node_modules/.bin/csslint build/*.css --quiet')
  end
end

namespace :assets do
  desc 'Compile all assets'
  task :compile => 'assets:clean' do
    # Compile assets.
    FileUtils.mkdir(Canon.build_path)
    File.write(File.join(Canon.build_path, 'canon.js'), Canon.sprockets['canon.js'])
    File.write(File.join(Canon.build_path, 'canon.css'), Canon.sprockets['canon.css'])

    # Minify assets.
    Canon.sprockets.css_compressor = :yui
    Canon.sprockets.js_compressor = :uglifier
    File.write(File.join(Canon.build_path, 'canon.min.js'), Canon.sprockets['canon.js'])
    File.write(File.join(Canon.build_path, 'canon.min.css'), Canon.sprockets['canon.css'])

    FileList[Canon.images_path + '/*.png'].each do |image|
      FileUtils.copy(image, Canon.build_path)
    end
  end

  desc 'Clean compiled assets'
  task :clean do
    FileUtils.remove_dir(Canon.build_path, true)
  end
end
