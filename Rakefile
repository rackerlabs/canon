require 'compass'
require 'sprockets'
require 'sprockets/sass'
require File.expand_path('../lib/canon', __FILE__)

CANON_ENV = ENV['CANON_ENV'] || 'development'

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

desc 'Lint javascripts and stylesheets'
task :lint => ['lint:stylesheets', 'lint:javascripts']

namespace :lint do
  desc 'Lint javascripts with JSHint'
  task :javascripts do
    jshint_command = 'node_modules/.bin/jshint lib/canon/javascripts/'
    if (CANON_ENV == 'test')
      jshint_command += ' --checkstyle-reporter > ' + Canon.build_path + '/jshint.xml'
    end

    system(jshint_command)
  end

  desc 'Lint stylesheets with CSS Lint'
  task :stylesheets => 'assets:compile' do
    csslint_command = 'node_modules/.bin/csslint build/canon.css --quiet'
    if (CANON_ENV == 'test')
      csslint_command += ' --format=checkstyle-xml > ' + Canon.build_path + '/csslint.xml'
    end

    system(csslint_command)
  end
end

task :default => ['assets:compile', 'lint']
