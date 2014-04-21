var facetLimit = 5;

var setClearAllState = function() {
  var isListFaceted = $('.rs-facet-section .selected').length;

  if(isListFaceted) {
    $('.rs-facet-header .rs-facet-clear-link').removeClass('rs-hidden');
  } else {
    $('.rs-facet-header .rs-facet-clear-link').addClass('rs-hidden');
  }
}

var setClearSectionState = function(section) {
  var isSectionFaceted = section.find('.selected').length;

  if(isSectionFaceted) {
    section.find('.rs-facet-section-header .rs-facet-clear-link').removeClass('rs-hidden');
  } else {
    section.find('.rs-facet-section-header .rs-facet-clear-link').addClass('rs-hidden');
  }
}

var toggleSection = function(section) {
  var toggleHTML = '';
  if(section.hasClass('collapsed')) {
    toggleHTML = '<i class="rs-facet-toggle-arrow"></i>less';
    section.removeClass('collapsed').addClass('expanded').find('.rs-facet-item.rs-hidden').removeClass('rs-hidden');
  } else {
    toggleHTML = '<i class="rs-facet-toggle-arrow"></i>more';
    section.removeClass('expanded').addClass('collapsed');
    var i = 0;
    section.find('.rs-facet-item').each(function() {
      if(i>=facetLimit) {
        $(this).addClass('rs-hidden');
      }
      i++;
    });
  }
  section.find('.rs-facet-section-toggle').html(toggleHTML);
}

var initFacets = function() {

  $('.rs-facet-section').each(function() {
    var section = $(this);
    var items = section.find('.rs-facet-item');
    if(items.length >= facetLimit+1) {
      var i=0;
      items.each(function() {
        if(i>=facetLimit) {
          $(this).addClass('rs-hidden');
        }
        i++;
      });
      section.addClass('collapsed');

      if(!section.find('.rs-facet-section-toggle').length) {
        section.find('.rs-facet-list').append('<li class="rs-facet-section-toggle"><i class="rs-facet-toggle-arrow"></i>more</li>');
      }
    }
  });

  $('.rs-facet-section .rs-facet-item').click(function() {
    $(this).toggleClass('selected');
    setClearAllState();
    setClearSectionState($(this).closest('.rs-facet-section'));
  });

  $('.rs-facet-header .rs-facet-clear-link').click(function() {
    $(this).addClass('rs-hidden');
    $('.rs-facet-section .rs-facet-item.selected').removeClass('selected');
    $('.rs-facet-section .rs-facet-clear-link').addClass('rs-hidden');
  });

  $('.rs-facet-section-toggle').click(function() {
    toggleSection($(this).closest('.rs-facet-section'));
  });

  $('.rs-facet-section-header .rs-facet-clear-link').click(function() {
    $(this).addClass('rs-hidden').closest('.rs-facet-section').find('.selected').removeClass('selected');
    setClearAllState();
  });
}

$(document).ready(function() {
  initFacets();
});