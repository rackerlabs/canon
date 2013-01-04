module Merlot
  # Basic Button object
  class Button < Element
    # Clicks on button and waits for page to load or refresh
    def click
      @object.click

      # Ensure page has loaded after click action
      page_is_loaded?
    end

    # Performs submit action on button
    def submit_button
      @object.submit

      # Ensure page has loaded after submission
      page_is_loaded?
    end
  end
end