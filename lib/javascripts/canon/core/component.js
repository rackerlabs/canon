define('canon/core/component', ['klass'], function (klass) {

  var Component = klass({
    _element: null,
    _isDisposed: false,

    attach: function (selector) {
      if (this._element) {
        throw 'Component is already attached.';
      }

      this._element = $(selector);
    },
    dispose: function () {
      if (this._isDisposed) {
        return;
      }

      this._isDisposed = true;
      this.disposeInternal();
    },
    disposeInternal: function () {
      this._element = null;
    },
    getElement: function () {
      return this._element;
    }
  });

  return Component;
});
