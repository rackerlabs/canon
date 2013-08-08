define('canon/menu', ['canon/core/component'], function (Component) {

  var Menu;

  Menu = Component.extend({
    _isVisible: false,

    attach: function (selector) {
      this.supr(selector);

      if (!this._element.hasClass('rs-dropdown')) {
        throw 'Component must be attached to element with "rs-dropdown".';
      }

      $('.rs-dropdown-menu', this._element).addClass('hidden');

      $(document).on('click.menu', $.proxy(function (e) {
        if ($.contains(this._element.context, e.target)) {
          return;
        }

        this.hide();
      }, this));

      this._element.on('click.menu', '.rs-dropdown-toggle', $.proxy(function () {
        this.toggle();
      }, this));

      this._element.on('click.menu', '.rs-dropdown-menu a', $.proxy(function () {
        this.hide();
      }, this));
    },
    show: function () {

      var menuElement;

      this._isVisible = true;

      menuElement = $('.rs-dropdown-menu', this._element);
      menuElement.removeClass('hidden');
      menuElement.addClass('visible');
    },
    hide: function () {

      var menuElement;

      this._isVisible = false;

      menuElement = $('.rs-dropdown-menu', this._element);
      menuElement.addClass('hidden');
      menuElement.removeClass('visible');
    },
    toggle: function () {
      this._isVisible ? this.hide() : this.show();
    },
    disposeInternal: function () {
      this._element.off('click.menu');
      $(document).off('click.menu');

      this.supr();
    }
  });

  return Menu;
});
