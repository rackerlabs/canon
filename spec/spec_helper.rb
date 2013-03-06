require 'capybara'
require 'capybara/rspec'
require 'green_onion'
require 'selenium-webdriver'
require File.expand_path('../../lib/canon', __FILE__)

def base_url
  Canon.test? ? 'http://ci.canon.rackspace.com:3000' : 'http://0.0.0.0:3000'
end

def capabilities
  Selenium::WebDriver::Remote::Capabilities.new({
    :platform => ENV['CANON_SELENIUM_PLATFORM'],
    :browser_name => ENV['CANON_SELENIUM_BROWSER'],
    :javascript_enabled => true,
    :takes_screenshots => true,
    :css_selectors_enabled => true
  })
end

Capybara.app_host = base_url
Capybara.default_driver = :selenium
Capybara.run_server = false

GreenOnion.configure do |config|
  config.driver = :selenium
  config.fail_on_different_dimensions = true
  config.threshold = 0.5
end

RSpec.configure do |config|
  config.order = :random
  config.run_all_when_everything_filtered = true
  config.treat_symbols_as_metadata_keys_with_true_values = true
end
