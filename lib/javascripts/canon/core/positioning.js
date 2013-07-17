define('canon/core/positioning', [], function () {

  function isOffScreenX(element) {
    return (element.outerWidth() + element.offset().left) > $(window).outerWidth();
  }

  function isOffScreenY(element) {
    return (element.outerHeight() + element.offset().top) > $(window).outerHeight();
  }

  return {
    /**
     * Positions an element relative to the bottom-right corner
     * of a target element. If the provided offset results in the
     * element being moved offscreen, it positions the element
     * relative to the opposite corner and flips the offset.
     *
     * @method
     * @param {Element} element
     * @param {Element} target
     * @param {Object} position
     */
    offset: function (element, target, position) {

      var targetOffset, elementOffset;

      targetOffset = target.offset();
      elementOffset = {
        top: target.outerHeight() + targetOffset.top + position.top,
        left: target.outerWidth() + targetOffset.left + position.left
      };
      element.offset(elementOffset);

      if (isOffScreenX(element)) {
        elementOffset.left = targetOffset.left - element.outerWidth() - position.left;
        element.offset(elementOffset);
      }

      if (isOffScreenY(element)) {
        elementOffset.top = targetOffset.top - element.outerHeight() - position.top;
        element.offset(elementOffset);
      }
    }
  };
});
