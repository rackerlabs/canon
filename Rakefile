require 'sprockets'
require 'sprockets-less'

namespace :lint do
  desc 'Lint javascripts with JSHint'
  task :javascripts do
    system('node_modules/.bin/jshint lib/canon/javascripts/ --show-non-errors')
  end
end

namespace :assets do
  environment = Sprockets::Environment.new(Dir.pwd)
  environment.append_path(File.join(Dir.pwd, 'lib/canon/javascripts'))
  environment.append_path(File.join(Dir.pwd, 'lib/canon/stylesheets'))
  environment.append_path(File.join(Dir.pwd, 'vendor'))
  manifest = Sprockets::Manifest.new(environment, File.join(Dir.pwd, 'build'))

  desc 'Compile all assets'
  task :compile do
    manifest.compile('canon.js', 'canon.css')
  end

  desc 'Clean compiled assets'
  task :clean do
    manifest.clobber
  end
end
