module Merlot
  # Basic List Box object
  class List_Box < Element
    def initialize(selenium, locator_type, locator)
      super
      @select = Selenium::WebDriver::Support::Select.new(@object)
    end

    # De-selects all options in the list box
    def deselect_all_options
      @select.deselect_all
    end

    # De-selects option from drop-down based on it's index
    def deselect_option_by_index(index)
      begin
        @select.select_by(:index, index)
      rescue
        raise "Could not find the specified option."
      end
    end

    # De-selects option based on it's text
    def deselect_option_by_text(text)
      begin
        @select.deselect_by(:text, text)
      rescue
        raise "Could not find the specified option."
      end
    end

    # De-selects option based on it's value
    def deselect_option_by_value(value)
      begin
        @select.select_by(:value, value)
      rescue
        raise "Could not find the specified option."
      end
    end

    # Returns the first selected option
    def first_selected_option
      @object.first_selected_option
    end

    # Returns an array of all options
    def options
      @object.options
    end

    # Selects all options in the list box
    def select_all_options
      # De-select any currently selected options first so the list is clear and the user
      # does not end up with any un-intended options
      @select.deselect_all

      @select.select_all
    end

    def select_options(options)
      # De-select any currently selected options first so the list is clear and the user
      # does not end up with any un-intended options
      @select.deselect_all

      options.each do |option|
        begin
          @select.select_by(:text, text)
        rescue
          raise "Could not find option #{option}."
        end
      end
    end

    # Returns an array of the selected options
    def selected_options
      @object.selected_options
    end
  end
end