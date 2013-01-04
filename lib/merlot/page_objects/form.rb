module Merlot
  # Basic Form object
  class Form < Element
    # Performs submit action on form
    def submit_button
      @object.submit

      # Ensure page has loaded after submission
      page_is_loaded?
    end
  end
end