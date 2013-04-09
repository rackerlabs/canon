define('canon/tooltip', ['ender-amd', 'canon/core/component'], function ($, Component) {

  var THRESHOLD = 500, OFFSET = 10, Tooltip;

  function extractTitleFromToggle() {
    this._title = this._element.attr('title');
    this._element.removeAttr('title');
  }

  function createTooltipWithTitle(title) {

    var innerContent;

    innerContent = $('<div class="tooltip-inner"></div>');
    innerContent.text(title);

    this._content = $('<div class="tooltip"></div>');
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

      this._element.on('mouseover.tooltip', function (e, tooltip) {
        tooltip._isToggleActive = true;
        showTooltip(tooltip);
      }, this);

      this._element.on('mouseout.tooltip', function (e, tooltip) {
        tooltip._isToggleActive = false;
        hideTooltip(tooltip);
      }, this);

      this._content.on('mouseover.tooltip', function (e, tooltip) {
        tooltip._isTooltipActive = true;
      }, this);

      this._content.on('mouseout.tooltip', function (e, tooltip) {
        tooltip._isTooltipActive = false;
        hideTooltip(tooltip);
      }, this);

      this.hide();
    },
    show: function () {
      var elementOffset = this._element.offset();

      this._content.addClass('visible');
      this._content.removeClass('hidden');
      this._content.offset(elementOffset.left + OFFSET, elementOffset.top + OFFSET);
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
