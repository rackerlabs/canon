define('canon/content_section', ['ender-amd', 'canon/core/component'], function ($, Component) {

  var ContentSection = Component.extend({
    _expanded: null,

    attach: function (selector) {
      this.supr(selector);

      if (!this._element.hasClass('collapsible-section')) {
        throw 'Component must be attached to element with "collapsible-section".';
      }

      this._element.addClass('loading');
      this._element.on('click.content-section', '.content-section-header', function (e, contentSection, element) {
        if (element.hasClass('loading')) {
          return;
        }

        contentSection.toggle();
      }, this, this._element);
    },
    expand: function () {
      this._expanded = true;

      this._element.addClass('expanded');
      this._element.removeClass('collapsed');
      this._element.removeClass('loading');
    },
    collapse: function () {
      this._expanded = false;

      this._element.addClass('collapsed');
      this._element.removeClass('expanded');
      this._element.removeClass('loading');
    },
    toggle: function () {
      this._expanded ? this.collapse() : this.expand();
    },
    dispose: function () {
      if (this._element) {
        this._element.off('click.content-section');
      }

      this.supr();
    }
  });

  return ContentSection;
});
