module Merlot
  # Special class for drop-downs that fire AJAX events.
  #
  # If AUT_USES_JAVASCRIPT in site_config.rb is set to true, it is not
  # necessary to use this class.
  #
  # This class should be used when you know that an object will fire an AJAX
  # event and you do not want to incur the additional performance penalty on
  # each object that using Element's default behavior will.
  class DropDownAJAX < Element
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
        wait_for_ajax
      rescue
        raise "Could not find the specified option."
      end
    end

    # Selects option based on it's text
    def select_option_by_text(text)
      begin
        @select.select_by(:text, text)
        wait_for_ajax
      rescue
        raise "Could not find the specified option."
      end
    end

    # Selects option based on it's value
    def select_option_by_value(value)
      begin
        @select.select_by(:value, value)
        wait_for_ajax
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