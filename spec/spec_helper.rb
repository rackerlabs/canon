require 'capybara'
require 'capybara/rspec'
require 'green_onion'
require 'sauce/capybara'
require 'socket'
require File.expand_path('../../lib/canon', __FILE__)

CONFIGURATIONS = [
  ['OS X 10.8', 'Chrome', nil]
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
  ENV['CANON_URL'] || 'http://0.0.0.0:3000'
end

Capybara.app_host = url
Capybara.default_driver = :sauce
Capybara.run_server = false
Capybara.server_port = 9000

GreenOnion.configure do |config|
  config.driver = :sauce
  config.skins_dir = ['spec/skins', platform, browser, version].join('/')
  config.threshold = 0.5
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
  config[:job_name] = ENV['JOB_NAME'] || 'Development'
  config[:build] = ENV['BUILD_NUMBER']
  config[:branch] = ENV['GIT_BRANCH']
  config[:commit] = ENV['GIT_COMMIT']
  config['custom-data'] = {
    url: url,
    executor: Socket.gethostname,
    version: Canon::VERSION,
    environment: Canon.environment
  }
end
