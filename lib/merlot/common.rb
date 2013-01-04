module Merlot
  module Common
    # Adds a cookie to the browser.  Options are :name, :value, :path, :secure, and :expires
    def add_cookie(opts = {})
      @selenium_driver.manage.add_cookie(cookie)
    end

    # Returns an array of all cookies
    def all_cookies
      @selenium_driver.manage.all_cookies
    end

    # Closes the current window, or the browser if no windows are left
    def close_window
      @selenium_driver.close
    end

    # Returns the URL of the current page
    def current_url
      for wait in 1..40 do
        begin
          url = @selenium_driver.current_url

          if url == nil
            sleep(0.5)
          else
            break
          end
        rescue => e
          # Continue
        end
      end

      return url
    end

    # Deletes all cookies
    def delete_all_cookies
      @selenium_driver.manage.delete_all_cookies
    end

    # Deletes the specified cookie
    def delete_cookie(cookie)
      @selenium_driver.delete_cookie(cookie)
    end

    # Executes an asynchronous piece of JavaScript in the context of the currently selected frame or window.
    # See Selenium::WebDriver::Driver for more info on this.
    def execute_async_javascript(script, *args)
      @selenium_driver.execute_async_script(script, *args)
    end

    # Execute specified JavaScript
    def execute_javascript(script, *args)
      @selenium_driver.execute_script(script, *args)
    end

    # Exits the current iframe
    def exit_iframe
      @selenium_driver.switch_to.default_content
    end

    # Returns the value of the given CSS property
    def get_CSS_property_value(css_property)
      @selenium_driver.style(css_property)
    end

    # Returns the cookie with the specified name
    def get_cookie_by_name(name)
      @selenium_driver.manage.cookie_named(name)
    end

    # Opens the specified URL in the browser
    def go_to_URL(url)
      @selenium_driver.get(url)
    end

    # Handles a Javascript alert.  response can be text, accept, dismiss, or type
    def handle_javascript_alert(response, text_to_type = "")
      alert = @selenium_driver.switch_to.alert

      if response == "text"
        alert.text
      elsif response == "accept"
        alert.accept
      elsif response == "dismiss"
        alert.dismiss
      else response == "type"
        alert.send_keys(text_to_type)
      end
    end

    # Presses and holds a modifier key.  Use the following options as the argument to pass:  :shift, :alt,
    # :control, :command, :meta
    def hold_down_modifier_key(key)
      @selenium_driver.action.key_down(key).perform
    end

    # Maximize window
    def maximize_window
      @selenium_driver.manage.window.maximize
    end

    # Navigate back in the browser's history
    def navigate_back
      @selenium_driver.navigate.back

      # Ensure page has fully loaded
      page_is_loaded?
    end

    # Navigate forward in the browser's history
    def navigate_forward
      @selenium_driver.navigate.forward

      # Ensure page has fully loaded
      page_is_loaded?
    end

    # Checks to see if the page has finished loading and fails the test if more than 30 seconds pass
    def page_is_loaded?
      @document_status = ""

      begin
        wait = Selenium::WebDriver::Wait.new(:timeout => 30)

        wait.until do
          if @document_status == "complete"
            return true
          else
            @document_status = @selenium.execute_script "return document.readyState"
          end
        end
      rescue
        @@TEST_FAILURE = true
        fail "Step Failure - Page did not load!"
      end
    end

    # Returns the title of the current page
    def page_title
      @selenium_driver.title
    end

    # Puts focus on the parent window
    def put_focus_on_parent_window
      @selenium_driver.switch_to "null"
    end

    # Refreshes the current page
    def refresh_current_page
      @selenium_driver.navigate.refresh

      # Ensure page has fully loaded
      page_is_loaded?
    end

    # Releases the depressed left mouse button
    def release_depressed_left_mouse_button
      @selenium.driver.action.release.perform
    end

    # Saves a PNG screenshot to the given path
    def save_screenshot(path)
      @selenium_driver.save_screenshot(path)
    end

    # Selects a window.  Window is identified by title.
    def select_window_by_title(window_title)
      @selenium_driver.select_window(title="#{windowTitle}")
    end

    # Switches to the given iframe
    def switch_to_iframe(element)
      @selenium_driver.switch_to.frame element
    end

    # Quit the browser
    def quit_browser
      @selenium_driver.quit
    end

    # Returns true if the given text is present.  Note that this method only checks to see if the method
    # is present in the page source, and not necessarily if it visible.
    def text_present?(text)
      @selenium_driver.page_source.contains(text)
    end

    # Polls for active connections to the server as a way to determine if all AJAX events have finished.
    # Supports jQuery, Prototype, Dojo, and Google Closure
    # AUT_JAVASCRIPT_TYPE must be set in site_config.rb to use this method.
    def wait_for_ajax(timeout = 5)
      @wait = Selenium::WebDriver::Wait.new(:timeout => timeout)
      @timeout_message = "Wait for AJAX timed out"

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

    # Waits for multiple windows to be present.  Windows are found by handle.  'num_expected_windows' is the number of
    # windows expected to be present
    def wait_for_multi_windows_by_handle(num_expected_windows)
      for wait in 1..(TIMEOUT * 2 / 1000) do
        windows = @selenium_driver.window_handles

        if num_expected_windows != windows.length
          sleep(0.5)
        else
          break
        end
      end

      for wait in 1..(TIMEOUT * 2 / 1000) do
        begin
          window_names = @selenium_driver.window_handle
          @selenium_driver.switch_to.window("name=#{window_names[num_expected_windows - 1]}")

          break
        rescue => e
          sleep(0.5)
          # if exception continue
        end
      end
    end

    # Waits for multiple windows to be present.  Windows are identified by name.  'num_expected_windows' is
    # the number of windows expected to be present
    def wait_for_multi_windows_by_name(num_expected_windows)
      for wait in 1..20 do
        windows = @selenium_driver.window_handles

        if num_expected_windows != windows.length
          sleep(0.5)
        else
          break
        end
      end

      for wait in 1..10 do
        begin
          window_titles = @selenium_driver.window_handles
          @selenium_driver.switch_to.window("title=#{window_titles[num_expected_windows - 1]}")

          break
        rescue => e
          sleep(0.5)
          # if exception, continue
        end
      end
    end

    # Waits until specified text is present.  element is the page object that contains the text.
    # expected_text is the text that element should contain.  Timeout defaults to five seconds but
    # can be overridden.
    def wait_for_text(element, expected_text, timeout = 5)
      @wait = Selenium::WebDriver::Wait.new(:timeout => timeout)
      @timeout_message = "Wait for text timed out"

      begin
        sleep 1
        @wait.until { element.text == expected_text }
      rescue
        fail @timeout_message
      end
    end

    # Waits until specified element is visible.  Timeout defaults to five seconds but can be overridden.
    def wait_until_visible(element, timeout = 5)
      @wait = Selenium::WebDriver::Wait.new(:timeout => timeout)
      @timeout_message = "Element did not become visible within #{timeout}.to_s seconds"

      begin
        sleep 1
        @wait.until { element.visible? == true }
      rescue
        fail @timeout_message
      end
    end

    # Returns the current window handle
    def window_handle
      @selenium_driver.window_handle
    end

    # Returns the handles of all open browser windows
    def window_handles
      @selenium_driver.window_handles
    end
  end
end