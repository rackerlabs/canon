define('canon/menu', ['canon/core/component'], function (Component) {

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

      this._element.on('click.menu', '.dropdown-toggle', $.proxy(function () {
        this.toggle();
      }, this));

      this._element.on('click.menu', '.dropdown-menu a', $.proxy(function () {
        this.hide();
      }, this));
    },
    show: function () {

      var menuElement;

      this._isVisible = true;

      menuElement = $('.dropdown-menu', this._element);
      menuElement.removeClass('hidden');
      menuElement.addClass('visible');

      $(document).on('click.menu', $.proxy(function () {
        this.hide();
      }, this));
    },
    hide: function () {

      var menuElement;

      this._isVisible = false;

      menuElement = $('.dropdown-menu', this._element);
      menuElement.addClass('hidden');
      menuElement.removeClass('visible');

      $(document).off('click.menu');
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
