require 'capybara'
require 'capybara/rspec'
require 'green_onion'
require 'selenium-webdriver'
require File.expand_path('../../lib/canon', __FILE__)

def capabilities
  Selenium::WebDriver::Remote::Capabilities.new({
    :platform => ENV['CANON_SELENIUM_PLATFORM'],
    :browser_name => ENV['CANON_SELENIUM_BROWSER'],
    :javascript_enabled => true,
    :takes_screenshots => true,
    :css_selectors_enabled => true
  })
end

def driver
  Canon.test? ? :grid : :selenium
end

def url
  Canon.test? ? 'http://ci.canon.rackspace.com:3000' : 'http://0.0.0.0:3000'
end

Capybara.app_host = url
Capybara.default_driver = driver
Capybara.run_server = false

Capybara.register_driver :grid do |app|
  Capybara::Selenium::Driver.new(app,
    :browser => :remote,
    :url => 'http://10.14.209.83:4444/wd/hub',
    :desired_capabilities => capabilities)
end

GreenOnion.configure do |config|
  config.driver = Canon.test? ? :canon : :selenium
  config.fail_on_different_dimensions = true
  config.threshold = 0.5
end

RSpec.configure do |config|
  config.order = :random
  config.run_all_when_everything_filtered = true
  config.treat_symbols_as_metadata_keys_with_true_values = true
end
