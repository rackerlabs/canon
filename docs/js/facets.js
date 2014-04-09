$(document).ready(function() {

  $('.rs-facet-section .rs-facet-item').click(function() {
    $(this).toggleClass('selected');

    var isFaceted = false;

    $('.rs-facet-section .rs-facet-item').each(function() {
      if($(this).hasClass('selected')) {
        isFaceted = true;
      }
    });
console.log('isFaceted = '+isFaceted);
    if(isFaceted) {
      $('.rs-clear-facets').removeClass('selected');
    } else {
      $('.rs-clear-facets').addClass('selected');
    }

  });

  $('.rs-clear-facets').click(function() {
    $(this).addClass('selected');
    $('.rs-facet-section .rs-facet-item.selected').removeClass('selected');
  });

  $('.rs-facet-section-toggle').click(function() {
    var thisToggle = $(this);
    var thisSection = $(this).closest('.rs-facet-section');
    var isCollapsed = thisSection.hasClass('collapsed');

    var more = '<i class="rs-arrow"></i>more';
    var less = '<i class="rs-arrow"></i>less';

    if(isCollapsed) {
      thisSection.addClass('expanded').removeClass('collapsed');
      thisToggle.html(less);
    } else {
      thisSection.addClass('collapsed').removeClass('expanded');
      thisToggle.html(more);
    }

  });

  $('.rs-clear-facets').click(function() {

  });

});