module Merlot
  # Basic Radio Button object
  class RadioButton < Element
    # Selects the radio button if selected? is false
    def select
      @object.click if not selected?
    end

    # Returns current state (selected or not) of radio button
    def selected?
      return @object.selected?
    end
  end
end