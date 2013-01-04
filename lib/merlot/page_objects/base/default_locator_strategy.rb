module Merlot
  class DefaultLocatorStrategy
    # In addition to initializing, provides the ability to change the settings of javascript_enabled and javascript_type.
    #   Defaults for these settings come from the constants AUT_USES_JAVASCRIPT and AUT_JAVASCRIPT_TYPE in site_config.rb.
    def initialize(javascript_enabled = AUT_USES_JAVASCRIPT, javascript_type = AUT_JAVASCRIPT_TYPE)
      @javascript_enabled = javascript_enabled
      @javascript_type = javascript_type
    end

    # Waits for object to become present before proceding.
    #   If object doesn't appear before wait time, test will fail.
    def find_element(selenium, locator_obj)
      element_timeout = TIMEOUT * 2 / 1000

      @selenium = selenium
      @locator_type = locator_obj.type
      @locator = locator_obj.locator
      @wait = Selenium::WebDriver::Wait.new(:timeout => element_timeout)
      @timeout_message = "Wait for AJAX timed out"

      if @@TEST_FAILURE === true
        fail "Step failed due to previous step failure!"
      end

      # If application under test contains AJAX, wait for AJAX events to complete.
      #
      # Supports jQuery, Prototype, Dojo, and Google Closure.
      #
      # This feature causes a slight performance hit on each element.  To turn this off,
      # simply set AUT_USES_JAVASCRIPT to false in site_config.rb.  If you do that,
      # be sure to use the appropriate "AJAX" version of the page object classes when
      # defining your pages.  These classes can be found in lib/common/page_objects/ajax.
      if AUT_USES_JAVASCRIPT == true
        if AUT_JAVASCRIPT_TYPE == :jQuery # jQuery
          begin
            sleep 1
            @wait.until { @selenium.execute_script "return jQuery.active == 0" }
          rescue
            fail @timeout_message
          end
        elsif AUT_JAVASCRIPT_TYPE == :prototype # Prototype
          begin
            sleep 1
            @wait.until { @selenium.execute_script "return Ajax.activeRequestCount == 0" }
          rescue
            fail @timeout_message
          end
        elsif AUT_JAVASCRIPT_TYPE == :dojo # Dojo
          begin
            sleep 1
            @wait.until { @selenium.execute_script "return dojo.io.XMLHTTPTransport.inFlight.length == 0" }
          rescue
            fail @timeout_message
          end
        else AUT_JAVASCRIPT_TYPE == :closure # Google Closure
          begin
            sleep 1
            @wait.until { @selenium.execute_script "return goog.net.XhrIoPool.isComplete() == true" }
          rescue
            fail @timeout_message
          end
        end
      end

      # Explicitly wait for element to appear
      begin
        @wait.until { @object = @selenium.find_element(@locator_type => @locator) }
      rescue
        # TODO:  Add logging
      end

      return @object
    end
  end
end