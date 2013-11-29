require 'capybara'
require 'capybara/rspec'
require 'green_onion'
require 'sauce/capybara'
require 'socket'
require File.expand_path('../../lib/canon', __FILE__)

CONFIGURATIONS = [
  ['Windows 7', 'Chrome', nil]
]

def configuration
  thread = ENV['TEST_ENV_NUMBER'] || 0
  thread = thread.to_i

  CONFIGURATIONS[thread]
end

def platform
  configuration[0]
end

def browser
  configuration[1]
end

def version
  configuration[2]
end

def url
  'http://localhost:9000'
end

Capybara.app_host = url
Capybara.default_driver = :sauce
Capybara.run_server = false
Capybara.server_port = 9000

GreenOnion.configure do |config|
  config.driver = :sauce_labs
  config.skins_dir = ['spec/skins', platform, browser, version].join('/')
  config.threshold = 1.5
end

RSpec.configure do |config|
  config.run_all_when_everything_filtered = true
  config.treat_symbols_as_metadata_keys_with_true_values = true
end

Sauce.config do |config|
  config[:os] = platform
  config[:browser] = browser
  config[:version] = version
  config[:start_tunnel] = true
  config[:job_name] = ENV['TRAVIS_PULL_REQUEST'] || 'Development'
  config[:build] = ENV['TRAVIS_BUILD_NUMBER']
  config['custom-data'] = {
    url: url,
    executor: Socket.gethostname,
    version: Canon.version,
    environment: Canon.environment,
    branch: ENV['TRAVIS_BRANCH'],
    commit: ENV['TRAVIS_COMMIT']
  }
end
