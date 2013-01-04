module Merlot
  # Special class for buttons that fire AJAX events.
  #
  # If AUT_USES_JAVASCRIPT in site_config.rb is set to true, it is not
  # necessary to use this class.
  #
  # This class should be used when you know that an object will fire an AJAX
  # event and you do not want to incur the additional performance penalty on
  # each object that using Element's default behavior will.
  class ButtonAJAX < Element
    # Clicks on button and waits for AJAX to finish
    def click
      @object.click

      begin
        wait_for_ajax
      rescue => e
        # Continue
      end

      # Ensure page has loaded after submission
      page_is_loaded?
    end

    # Performs submit action on button and waits for AJAX to finish
    def submit_button
      @object.submit

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
