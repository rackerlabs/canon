$(document).ready(function () {

  var verticalOffset = $(".rs-nav-utility").height();

  $(".rs-nav-affix").each(function() {
    var nav = $(this);  
    nav.attr("data-affixed-top",verticalOffset);
    nav.affix({
        offset: nav.offset().top-verticalOffset
    });
    nav.on('affix.bs.affix', function () {
        $(this).css("top",$(this).attr('data-affixed-top')+"px");
    });
    verticalOffset+=nav.height();
  });

  $('body').scrollspy({ target: '#sidebar-nav' });

});
