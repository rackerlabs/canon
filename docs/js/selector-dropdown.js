$(document).ready(function() {

  $('.rs-selector').each(function() {
    var selector = $(this);

    selector.find('.rs-dropdown-menu').on('hide',function() {
      console.log("Blarf!");
    });

    selector.find('.rs-dropdown-link').each(function() {
      var link = $(this);

      link.hover(function() {
        var selector = $(this).closest('.rs-selector');
        selector.find('.active').removeClass('active');
      }, function() {
        var selector = $(this).closest('.rs-selector');
        selector.find('.selected').addClass('active');
      });

      link.click(function(e) {
        e.preventDefault();
        if(link.hasClass('disabled')) {
          e.stopPropagation();
        } else {
          var selector = link.closest('.rs-selector');
          selector.find('.selected').removeClass('selected')
          selector.find('.active').removeClass('active');
          link.addClass('selected active');
          selector.find('.rs-selector-label').text(link.find('.rs-dropdown-link-label').text());
        }
      });

    });

  });

});