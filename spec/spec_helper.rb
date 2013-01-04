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
  config.threshold = 0.5
end
