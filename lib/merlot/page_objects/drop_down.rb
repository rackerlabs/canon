module Merlot
  # Basic Drop-Down object
  class DropDown < Element
    def initialize(selenium, locator_type, locator)
      super
      @select = Selenium::WebDriver::Support::Select.new(@object)
    end

    # Returns an array of all options
    def options
      @object.options
    end

    # Selects option based on it's index
    def select_option_by_index(index)
      begin
        @select.select_by(:index, index)
      rescue
        raise "Could not find the specified option."
      end
    end

    # Selects option based on it's text
    def select_option_by_text(text)
      begin
        @select.select_by(:text, text)
      rescue
        raise "Could not find the specified option."
      end
    end

    # Selects option based on it's value
    def select_option_by_value(value)
      begin
        @select.select_by(:value, value)
      rescue
        raise "Could not find the specified option."
      end
    end

    # Returns the text of the currently selected option
    def selected_option_text
      @object.selected_options.to_s
    end
  end
end