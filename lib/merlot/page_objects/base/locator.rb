module Merlot
  class Locator
    attr_accessor :type
    attr_accessor :locator
    attr_accessor :attributes

    def initialize(locator, type = :id, attributes = {})
      @locator = locator
      @type = type
      @attributes = attributes
    end
  end
end