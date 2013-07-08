define('canon/core/positioning', [], function () {

  function isOffScreenX(element) {
    return (element.width() + element.offset().left) > window.innerWidth;
  }

  function isOffScreenY(element) {
    return (element.height() + element.offset().top) > window.innerHeight;
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
        top: target.height() + targetOffset.top + position.top,
        left: target.width() + targetOffset.left + position.left
      };
      element.offset(elementOffset);

      if (isOffScreenX(element)) {
        elementOffset.left = targetOffset.left - element.width() - position.left;
        element.offset(elementOffset);
      }

      if (isOffScreenY(element)) {
        elementOffset.top = targetOffset.top - element.height() - position.top;
        element.offset(elementOffset);
      }
    }
  };
});
