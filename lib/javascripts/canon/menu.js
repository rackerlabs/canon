define('canon/menu', ['ender-amd', 'canon/core/component'], function ($, Component) {

  var Menu;

  Menu = Component.extend({
    _isVisible: false,

    attach: function (selector) {
      this.supr(selector);

      if (!this._element.hasClass('dropdown')) {
        throw 'Component must be attached to element with "dropdown".';
      }

      $('.dropdown-menu', this._element).addClass('hidden');

      this._element.on('click.menu', function (e) {
        e.stopPropagation();
      });

      this._element.on('click.menu', '.dropdown-toggle', function (e, menu) {
        menu.toggle();
      }, this);

      this._element.on('click.menu', '.dropdown-menu a', function (e, menu) {
        menu.hide();
      }, this);

      $(document).on('click.menu', function (e, menu) {
        menu.hide();
      }, this);
    },
    show: function () {

      var menuElement;

      this._isVisible = true;

      menuElement = $('.dropdown-menu', this._element);
      menuElement.removeClass('hidden');
      menuElement.addClass('visible');
    },
    hide: function () {

      var menuElement;

      this._isVisible = false;

      menuElement = $('.dropdown-menu', this._element);
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
