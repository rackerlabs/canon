module Merlot
  # Basic Text Box object
  class TextBox < Element
    # Clears the contents of the text box
    def clear
      @object.clear
    end

    # Clears any current text and then types the new text into the text box
    def clear_and_type(text)
      @object.clear

      sleep 0.5

      @object.send_keys(text)
    end

    # Types specified text into text box, appending it to any current text
    def type(text)
      @object.send_keys(text)
    end

    # Returns the current text of the text box
    def value
      @value = @object.text
    end
  end
end