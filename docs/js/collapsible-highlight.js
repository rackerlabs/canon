$(document).ready(function() {
  
  $('.collapsible-highlight').each(function() {
    var highlight = $(this);

    highlight.hover(function() {
      highlight.addClass('hover');
    },function() {
      highlight.removeClass('hover');
    });

    var toggle = $('<span class="rs-toggle">Expand</span>');

    highlight.append(toggle);

    toggle.click(function() {
      var link = $(this);
      var isExpanded = link.closest('.collapsible-highlight').hasClass('expanded');

      if(isExpanded) {
        link.text('Expand').closest('.collapsible-highlight').removeClass('expanded');
      } else {
        link.text('Collapse').closest('.collapsible-highlight').addClass('expanded');
      }
    });
  });

});