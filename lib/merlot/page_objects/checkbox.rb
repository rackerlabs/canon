module Merlot
  # Basic Checkbox object
  class Checkbox < Element
    # Checks the checkbox if selected? is false
    def check
      @object.click if not selected?
    end

    # Verifies if checkbox is checked or unchecked, then proceeds to check/uncheck it
    def click
      box_checked = self.selected?

      if box_checked
        self.uncheck
      else
        self.check
      end
    end

    # Returns current state (checked or unchecked) of checkbox
    def selected?
      @object.selected?
    end

    # Unchecks the checkbox if selected? is true
    def uncheck
      @object.click if selected?
    end
  end
end