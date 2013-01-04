module Merlot
  # Basic Link object
  class Link < Element
    # Clicks on link and waits for page to load or refresh
    def click
      @object.click

      # Ensure page has loaded after click action
      page_is_loaded?
    end
  end
end