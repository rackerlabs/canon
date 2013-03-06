require 'capybara'
require 'selenium-webdriver'
require File.expand_path('../../../canon', __FILE__)

module GreenOnion
  class Canon
    include Capybara::DSL

    def initialize
      Capybara.default_driver = :grid
    end

    def record(url, path, dimensions = nil)
      visit(url)
      page.driver.browser.save_screenshot(path)
    end
  end
end
