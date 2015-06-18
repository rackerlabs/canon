$(document).ready(function () {
	var navSecondary = $(".nav-secondary-affix");

	if (navSecondary.length) {
		navSecondary.attr("data-offset-top",navSecondary.offset().top - $(".nav-utility").height() - 3).wrap('<div class="nav-affix-wrapper"></div>');
		$(".nav-affix-wrapper").css("height",navSecondary.height()+"px");
	}
});
