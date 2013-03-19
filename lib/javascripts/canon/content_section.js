define('canon/content_section', ['ender'], function ($) {

  function isCollapsible(element) {
    return element.hasClass('collapsible-section');
  }

  var ContentSection = function () {
    this._element = null;
    this._expanded = null;
  };

  ContentSection.prototype.attach = function (selector) {

    var element = $(selector);

    if (this._element) {
      throw 'Component is already attached.';
    } else if (!isCollapsible(element)) {
      throw 'Component must be attached to element with "collapsible-section".';
    }

    this._element = element;
    this._element.addClass('loading');
    this._element.on('click.content-section', '.content-section-header', function (e, contentSection, element) {
      if (element.hasClass('loading')) {
        return;
      }

      contentSection.toggle();
    }, this, this._element);
  };

  ContentSection.prototype.expand = function () {
    this._expanded = true;

    this._element.addClass('expanded');
    this._element.removeClass('collapsed');
    this._element.removeClass('loading');
  };

  ContentSection.prototype.collapse = function () {
    this._expanded = false;

    this._element.addClass('collapsed');
    this._element.removeClass('expanded');
    this._element.removeClass('loading');
  };

  ContentSection.prototype.toggle = function () {
    this._expanded ? this.collapse() : this.expand();
  };

  ContentSection.prototype.dispose = function () {
    if (this._element) {
      this._element.off('click.content-section');
      this._element = null;
    }
  };

  ContentSection.prototype.getElement = function () {
    return this._element;
  };

  return ContentSection;
});
