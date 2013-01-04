module Merlot
  include Common

  # Parent class of all objects
  class Element
    attr_accessor :locator_type
    attr_accessor :locator
    attr_accessor :locator_strategy
    attr_accessor :locator_object

    # Initializes a new Element object w/the specified parameters.
    # Locator strategy  and locator object use a default, but can be overridden if need be.
    def initialize(selenium, locator_type, locator, locator_strategy = DefaultLocatorStrategy.new, locator_obj = Locator.new(locator, locator_type))
      @selenium = selenium
      @locator_type = locator_type
      @locator = locator
      @object = locator_strategy.find_element(selenium, locator_obj)
    end

    # Get the value of the given attribute of the element
    def attribute(attr_name)
      @object.attribute(attr_name)
    end

    # Clicks on object
    def click
      @object.click
    end

    # Clicks (w/o releasing) in the middle of the element
    def click_and_hold
      @selenium.action.click_and_hold(@object).perform
    end

    # Moves to the element and performs a context click
    def context_click
      @selenium.action.context_click(@object).perform
    end

    # Check if the element is displayed
    def displayed?
      @object.displayed?
    end

    # Performs a double-click with the left mouse key on an object
    def double_click
      @selenium.driver.double_click(@object).perform
    end

    # Simulates a user performing a drag-and-drop of an element.  Source element is the element to be
    # dragged.  Target element acts as the location to drag the first element to.
    def drag_and_drop(source_element, target_element)
      @selenium.action.drag_and_drop(source_element, target_element).perform
    end

    # Performs a click-and-hold at the location of the source element, moves by a given offset, then releases the mouse.
    # right_by is an integer specifying the horizontal move offset.  down_by is an integer specifying the horizontal
    # move offset.  target_element acts as the location to drag the first element to.
    def drag_and_drop_by
      @selenium.action.drag_and_drop_by(source_element, right_by, down_by, target_element).perform
    end

    # Check if the element is enabled
    def enabled?
      @object.enabled?
    end

    # If element does not exist, returns false.  Else returns true.
    def exist
      if @object.nil?
        return false
      else
        return true
      end
    end

    # By default, moves the mouse to the middle of the given object.  Optional coordinates can be passed to it.
    # See Selenium::WebDriver::ActionBuilder for detail on using coordinates.
    def hover(right_by = nil, down_by = nil)
      @selenium.driver.move_to(@object, right_by, down_by).perform
    end

    # Returns the location of the element
    def location
      @object.location
    end

    # Returns the location of the element once it is scrolled into view
    def location_once_scrolled_into_view
      @object.location_once_scrolled_into_view
    end

    # Check if the element is selected
    def selected?
      @object.selected?
    end

    # Returns the size of the element
    def size
      @object.size
    end

    # Submit the element
    def submit
      @object.submit
    end

    # Returns the tag name of the specified element
    def tag_name
      @object.tag_name
    end

    # Returns text content of object
    def text
      @object.text
    end

    # Types in the element
    def type_in_element(*args)
      @object.send_keys(args)
    end

    # Checks if an object is visible
    def visible?
      @object.displayed?
    end
  end
end