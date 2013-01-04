require 'capybara/rspec'
require File.expand_path('../../lib/canon', __FILE__)

RSpec.configure do |config|
  config.order = :random
  config.run_all_when_everything_filtered = true
  config.treat_symbols_as_metadata_keys_with_true_values = true
end

Capybara.app = Canon.app
Capybara.default_driver = :selenium
