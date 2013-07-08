define('canon/tooltip', ['canon/core/component', 'canon/core/positioning'], function (Component, positioning) {

  var THRESHOLD = 500, OFFSET = 0, Tooltip;

  function extractTitleFromToggle() {
    this._title = this._element.attr('title');
    this._element.removeAttr('title');
  }

  function createTooltipWithTitle(title) {

    var innerContent;

    innerContent = $('<div class="rs-tooltip-inner"></div>');
    innerContent.html(title);

    this._content = $('<div class="rs-tooltip"></div>');
    this._content.append(innerContent);
    this._content.appendTo('body');
  }

  function showTooltip(tooltip) {
    setTimeout(function () {
      if (tooltip._isToggleActive) {
        tooltip.show();
      }
    }, THRESHOLD);
  }

  function hideTooltip(tooltip) {
    setTimeout(function () {
      if (tooltip._isToggleActive || tooltip._isTooltipActive) {
        return;
      }

      tooltip.hide();
    }, THRESHOLD);
  }

  Tooltip = Component.extend({
    _title: null,
    _content: null,
    _isToggleActive: false,
    _isTooltipActive: false,

    attach: function (selector) {
      this.supr(selector);

      extractTitleFromToggle.call(this);
      createTooltipWithTitle.call(this, this._title);

      this._element.on('mouseover.tooltip', $.proxy(function () {
        this._isToggleActive = true;
        showTooltip(this);
      }, this));

      this._element.on('mouseout.tooltip', $.proxy(function () {
        this._isToggleActive = false;
        hideTooltip(this);
      }, this));

      this._content.on('mouseover.tooltip', $.proxy(function () {
        this._isTooltipActive = true;
      }, this));

      this._content.on('mouseout.tooltip', $.proxy(function () {
        this._isTooltipActive = false;
        hideTooltip(this);
      }, this));

      this.hide();
    },
    show: function () {
      this._content.addClass('visible');
      this._content.removeClass('hidden');

      positioning.offset(this._content, this._element, {
        top: OFFSET,
        left: OFFSET
      });
    },
    hide: function () {
      this._content.addClass('hidden');
      this._content.removeClass('visible');
    },
    disposeInternal: function () {
      this._element.attr('title', this._title);
      this._element.off('mouseover.tooltip');
      this._element.off('mouseout.tooltip');

      this._content.remove();
      this._content.off('mouseover.tooltip');
      this._content.off('mouseout.tooltip');
      this._content = null;

      this.supr();
    },
    getContent: function () {
      return this._content;
    }
  });

  return Tooltip;
});
