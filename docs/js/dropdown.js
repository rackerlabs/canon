var hideDropdown = function() {
	$('.rs-dropdown-menu.visible').removeClass("visible").addClass('rs-hidden');
}

$(document).ready(function() {
	
	$('.rs-dropdown-link').click(function(e) {
		hideDropdown();
		e.stopPropagation();
	});

	$(".rs-dropdown-toggle").click(function(e) {
		if(!$(this).attr('disabled') && !$(this).hasClass('disabled')) {
			e.stopPropagation();
			hidePopover();
			hideDropdown();
			showOverlay();
			$(this).siblings('.rs-dropdown-menu').addClass("visible").removeClass('rs-hidden');
		}
	});

});