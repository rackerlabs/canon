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
  task :stylesheets do
    Rake::Task['assets:compile'].invoke
    system('node_modules/.bin/csslint build/*.css --quiet')
    Rake::Task['assets:clean'].invoke
  end
end

namespace :assets do
  manifest = Sprockets::Manifest.new(Canon.sprockets, Canon.build_path)

  desc 'Compile all assets'
  task :compile do
    manifest.compile('canon.js', 'canon.css')

    FileList[Canon.images_path + '/*.png'].each do |image|
      FileUtils.copy(image, Canon.build_path)
    end
  end

  desc 'Clean compiled assets'
  task :clean do
    manifest.clobber
  end
end
