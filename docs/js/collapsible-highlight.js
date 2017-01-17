$(document).ready(function() {
  
  $('.collapsible-highlight').each(function() {
    var highlight = $(this);

    highlight.hover(function() {
      highlight.addClass('hover');
    },function() {
      highlight.removeClass('hover');
    });

    var toggle = $('<span class="rs-toggle">Expand <i class="rs-icon rs-icon-arrow-down"></i></span>');

    highlight.append(toggle);

    toggle.click(function() {
      var link = $(this);
      var isExpanded = link.closest('.collapsible-highlight').hasClass('expanded');

      if(isExpanded) {
        link.html('Expand <i class="rs-icon rs-icon-arrow-down"></i>').closest('.collapsible-highlight').removeClass('expanded');
      } else {
        link.html('Collapse <i class="rs-icon rs-icon-arrow-up"></i>').closest('.collapsible-highlight').addClass('expanded');
      }
    });
  });

});