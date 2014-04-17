var setClearAllState = function() {
  var isListFaceted = $('.rs-facet-section .selected').length;

  if(isListFaceted) {
    $('.rs-facets-header .rs-clear-facets-link').removeClass('rs-hidden');
  } else {
    $('.rs-facets-header .rs-clear-facets-link').addClass('rs-hidden');
  }
}

var setClearSectionState = function(section) {
  var isSectionFaceted = section.find('.selected').length;

  if(isSectionFaceted) {
    section.find('.rs-facets-section-header .rs-clear-facets-link').removeClass('rs-hidden');
  } else {
    section.find('.rs-facets-section-header .rs-clear-facets-link').addClass('rs-hidden');
  }
}

$(document).ready(function() {

  $('.rs-facet-section .rs-facet-item').click(function() {
    $(this).toggleClass('selected');
    setClearAllState();
    setClearSectionState($(this).closest('.rs-facet-section'));
  });

  $('.rs-facets-header .rs-clear-facets-link').click(function() {
    $(this).addClass('rs-hidden');
    $('.rs-facet-section .rs-facet-item.selected').removeClass('selected');
    $('.rs-facet-section .rs-clear-facets-link').addClass('rs-hidden');
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

  $('.rs-facets-section-header .rs-clear-facets-link').click(function() {
    $(this).addClass('rs-hidden').closest('.rs-facet-section').find('.selected').removeClass('selected');
    setClearAllState();
  });

});