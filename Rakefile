require 'ci/reporter/rake/rspec'
require 'compass'
require 'susy'
require 'fog'
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

    FileList[Canon.images_path + '/*.gif'].each do |image|
      FileUtils.copy(image, Canon.build_path)
    end
  end
end

desc 'Clean build output'
task :clean do
  log('Cleaning all build output') do
    FileUtils.remove_dir(Canon.build_path, true)
    FileUtils.remove_dir(Canon.package_path, true)
  end
end

desc 'Lint javascripts and stylesheets'
task :lint => ['lint:stylesheets', 'lint:javascripts']

namespace :lint do
  JSHintTask.new(:javascripts) do |t|
    t.binary = 'node_modules/.bin/jshint'
    t.pattern = 'lib/canon/javascripts/ spec/unit/'

    if Canon.test?
      t.reporter = 'checkstyle-reporter'
      t.output = File.join(Canon.build_path, 'jshint.xml')
    end
  end

  CSSLintTask.new(:stylesheets => :compile) do |t|
    t.binary = 'node_modules/.bin/csslint'
    t.pattern = 'build/canon.css'
    t.quiet = true

    t.errors = [
      'box-sizing',
      'compatible-vendor-prefixes',
      'empty-rules',
      'fallback-colors',
      'ids',
      'known-properties',
      'vendor-prefix'
    ]
    t.ignore = [
      'adjoining-classes',
      'important',
      'star-property-hack',
      'underscore-property-hack',
      'unique-headings',
      'unqualified-attributes'
    ]

    if Canon.test?
      t.format = 'checkstyle-xml'
      t.output = File.join(Canon.build_path, 'csslint.xml')
    end
  end
end

namespace :spec do
  Rake::Task['ci:setup:rspec'].invoke if Canon.test?

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
    reporter = Canon.test? ? 'xunit' : 'dot'
    mocha_command = "node_modules/.bin/mocha-phantomjs --reporter #{reporter} #{url}"

    if Canon.test?
      mocha_command += ' > ' + Canon.build_path + '/unit.xml'
    end

    system(mocha_command)
  end
end

task :release do
  if Canon.test?
    puts "\e[31mRelease should only happen in the test environment!\e[0m"
    exit
  end

  log('Creating Canon packages') do
    FileUtils.remove_dir(Canon.package_path, true)
    FileUtils.mkdir(Canon.package_path)
    FileUtils.copy_entry(Canon.build_path, File.join(Canon.package_path, 'canon'))

    system("cd #{Canon.package_path} && tar -czf canon.tar.gz canon")
    system("cd #{Canon.package_path} && zip -q canon.zip canon/*")
  end

  connection = Fog::Storage.new(:provider => 'Rackspace', :rackspace_username => ENV['CANON_USERNAME'], :rackspace_api_key => ENV['CANON_API_KEY'])
  directory = connection.directories.get('cdn.canon.rackspace.com')

  files_to_upload = Dir.glob('build/*.css') + Dir.glob('build/*.js') + Dir.glob('package/*.tar.gz') + Dir.glob('package/*.zip')
  files_to_upload.each do |file|
    base_name = File.basename(file)
    versioned_name = "v#{Canon::VERSION}/#{base_name}"

    log("Uploading #{base_name} to CDN") do
      raise "#{base_name} already exists!" if directory.files.head(versioned_name)
      directory.files.create(:key => versioned_name, :body => File.open(file), :public => true)
    end
  end
end

task :default => ['compile', 'lint', 'spec:unit', 'spec:functional', 'spec:screenshot']
