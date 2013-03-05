require 'green_onion'
require 'selenium-webdriver'
require File.expand_path('../../lib/canon', __FILE__)

RSpec.configure do |config|
  config.order = :random
  config.run_all_when_everything_filtered = true
  config.treat_symbols_as_metadata_keys_with_true_values = true
end

GreenOnion.configure do |config|
  config.driver = :selenium
  config.fail_on_different_dimensions = true
  config.threshold = 0.5
end

def create_driver
  if Canon.test?
    Selenium::WebDriver.for(:remote,
      :url => 'http://10.14.209.83:4444/wd/hub',
      :desired_capabilities => capabilities
    )
  else
    Selenium::WebDriver.for(:firefox)
  end
end

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
