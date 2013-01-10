require 'ci/reporter/rake/rspec'
require 'compass'
require 'rspec/core/rake_task'
require 'sprockets'
require 'sprockets/sass'

require File.expand_path('../lib/canon', __FILE__)
require File.expand_path('../lib/tasks/csslint_task', __FILE__)
require File.expand_path('../lib/tasks/jshint_task', __FILE__)
require File.expand_path('../lib/tasks/log', __FILE__)

desc 'Compile all assets'
task :compile => 'clean' do
  log('Compiling assets') do
    FileUtils.mkdir(Canon.build_path)
    File.write(File.join(Canon.build_path, 'canon.js'), Canon.sprockets['canon.js'])
    File.write(File.join(Canon.build_path, 'canon.css'), Canon.sprockets['canon.css'])
  end

  log('Minifying assets') do
    Canon.sprockets.css_compressor = :yui
    Canon.sprockets.js_compressor = :uglifier
    File.write(File.join(Canon.build_path, 'canon.min.js'), Canon.sprockets['canon.js'])
    File.write(File.join(Canon.build_path, 'canon.min.css'), Canon.sprockets['canon.css'])
  end

  log('Copying images') do
    FileList[Canon.images_path + '/*.png'].each do |image|
      FileUtils.copy(image, Canon.build_path)
    end
  end
end

desc 'Clean build output'
task :clean do
  log('Cleaning all build output') do
    FileUtils.remove_dir(Canon.build_path, true)
  end
end

desc 'Lint javascripts and stylesheets'
task :lint => ['lint:stylesheets', 'lint:javascripts']

namespace :lint do
  JSHintTask.new(:javascripts) do |t|
    t.binary = 'node_modules/.bin/jshint'
    t.pattern = 'lib/canon/javascripts/ spec/unit/'

    if Canon.environment == 'test'
      t.reporter = 'checkstyle-reporter'
      t.output = File.join(Canon.build_path, 'jshint.xml')
    end
  end

  CSSLintTask.new(:stylesheets => :compile) do |t|
    t.binary = 'node_modules/.bin/csslint'
    t.pattern = 'build/*.css'
    t.quiet = true
    t.ignore << 'unique-headings'

    if Canon.environment == 'test'
      t.format = 'checkstyle-xml'
      t.output = File.join(Canon.build_path, 'csslint.xml')
    end
  end
end

namespace :spec do
  Rake::Task['ci:setup:rspec'].invoke if Canon.environment == 'test'

  desc 'Run functional tests'
  RSpec::Core::RakeTask.new(:functional) do |t|
    t.pattern = 'spec/functional/**/*_spec.rb'
  end

  desc 'Run screenshot tests'
  RSpec::Core::RakeTask.new(:screenshot) do |t|
    t.pattern = 'spec/screenshot/**/*_spec.rb'
  end

  desc 'Run unit tests'
  task :unit do
    url = 'http://0.0.0.0:3000/test'
    reporter = Canon.environment == 'test' ? 'xunit' : 'dot'
    mocha_command = "node_modules/mocha-phantomjs/bin/mocha-phantomjs --reporter #{reporter} #{url}"

    if Canon.environment == 'test'
      mocha_command += ' > ' + Canon.build_path + '/unit.xml'
    end

    system(mocha_command)
  end
end

task :default => ['compile', 'lint', 'spec:unit', 'spec:functional', 'spec:screenshot']
