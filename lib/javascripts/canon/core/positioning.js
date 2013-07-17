define('canon/core/positioning', [], function () {
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

      var page, targetOffset, elementOffset;

      page = $(document);
      targetOffset = target.offset();

      elementOffset = {
        top: target.outerHeight() + targetOffset.top + position.top,
        left: target.outerWidth() + targetOffset.left + position.left
      };

      if ((element.outerWidth() + elementOffset.left) > page.outerWidth()) {
        elementOffset.left = targetOffset.left - element.outerWidth() - position.left;
      }

      if ((element.outerHeight() + elementOffset.top) > page.outerHeight()) {
        elementOffset.top = targetOffset.top - element.outerHeight() - position.top;
      }

      element.offset(elementOffset);
    }
  };
});
