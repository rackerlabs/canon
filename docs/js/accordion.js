$(document).ready(function() {


  $('.rs-sidebar-accordion-toggle').click(function() {
    var container = $(this).closest('.rs-sidebar-accordion');

    if(container.hasClass('active')) {
      container.removeClass('active');
      $(this).next('.rs-sidebar-accordion-menu').slideUp('fast');
    } else {
      container.siblings('.rs-sidebar-accordion.active').removeClass('active').find('.rs-sidebar-accordion-menu').slideUp('fast');
      container.addClass('active');
      $(this).next('.rs-sidebar-accordion-menu').slideDown('fast');
    }
  
  });

  $('.rs-sidebar-accordion-menu .rs-nav-link').click(function() {
    $('.rs-sidebar-accordion-menu .rs-nav-item.active').removeClass('active');
    $(this).parent().addClass('active');
  });

});