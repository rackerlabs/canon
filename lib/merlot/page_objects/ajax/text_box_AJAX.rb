module Merlot
  # Special class for text boxes that fire AJAX events.
  #
  # If AUT_USES_JAVASCRIPT in site_config.rb is set to true, it is not
  # necessary to use this class.
  #
  # This class should be used when you know that an object will fire an AJAX
  # event and you do not want to incur the additional performance penalty on
  # each object that using Element's default behavior will.
  class TextBoxAJAX < Element
    # Clears any current text and then types the new text into the text box
    def clear_and_type(text)
      @object.clear
      @object.send_keys(text)

      begin
        wait_for_ajax
      rescue => e
        # Continue
      end
    end

    # Types specified text into text box, appending it to any current text
    def type(text)
      @object.send_keys(text)

      begin
        wait_for_ajax
      rescue => e
        # Continue
      end
    end

    # Returns the current text of the text box
    def value
      begin
        wait_for_ajax
      rescue => e
        # Continue
      end

      @value = @object.text
    end
  end
end