define('canon/core/component', ['ender-amd', 'klass'], function ($, klass) {

  var Component = klass({
    _element: null,

    attach: function (selector) {
      if (this._element) {
        throw 'Component is already attached.';
      }

      this._element = $(selector);
    },
    dispose: function () {
      this._element = null;
    },
    getElement: function () {
      return this._element;
    }
  });

  return Component;
});
