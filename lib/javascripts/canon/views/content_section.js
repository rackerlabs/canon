define('canon/views/content_section', ['canon/dom', 'canon/events'], function (dom, events) {

  function isCollapsible(element) {
    return element.hasClass('collapsible-section');
  }

  var ContentSection = function () {
    this._element = null;
  };

  ContentSection.prototype.attach = function (selector) {

    var element = dom.query(selector);

    if (this._element) {
      throw 'Component is already attached.';
    } else if (!isCollapsible(element)) {
      throw 'Component must be attached to element with "collapsible-section".';
    }

    this._element = element;
    events.on(this._element[0], 'click.content-section', '.content-section-header', function (e, contentSection) {
      contentSection.toggle();
    }, this);
  };

  ContentSection.prototype.expand = function () {
    this._element.removeClass('collapsed');
  };

  ContentSection.prototype.collapse = function () {
    this._element.addClass('collapsed');
  };

  ContentSection.prototype.toggle = function () {
    this._element.toggleClass('collapsed');
  };

  ContentSection.prototype.dispose = function () {
    if (this._element) {
      events.off(this._element[0], 'click.content-section');
      this._element = null;
    }
  };

  ContentSection.prototype.getElement = function () {
    return this._element;
  };

  return ContentSection;
});
