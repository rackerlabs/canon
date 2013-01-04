module Merlot
  # Special class for checkboxes that fire AJAX events.
  #
  # If AUT_USES_JAVASCRIPT in site_config.rb is set to true, it is not
  # necessary to use this class.
  #
  # This class should be used when you know that an object will fire an AJAX
  # event and you do not want to incur the additional performance penalty on
  # each object that using Element's default behavior will.
  class CheckboxAJAX < Element
    # Checks the checkbox if selected? is false
    def check
      @object.click if not selected?

      begin
        wait_for_ajax
      rescue => e
        # Continue
      end

      # Ensure page has loaded after submission
      page_is_loaded?
    end

    # Verifies if checkbox is checked or unchecked, then proceeds to check/uncheck it
    def click
      box_checked = self.selected?

      if box_checked
        self.uncheck
      else
        self.check
      end

      begin
        wait_for_ajax
      rescue => e
        # Continue
      end

      # Ensure page has loaded after submission
      page_is_loaded?
    end

    # Returns current state (checked or unchecked) of checkbox
    def selected?
      return @object.selected?
    end

    # Unchecks the checkbox if selected? is true
    def uncheck
      @object.click if selected?

      begin
        wait_for_ajax
      rescue => e
        # Continue
      end

      # Ensure page has loaded after submission
      page_is_loaded?
    end
  end
end