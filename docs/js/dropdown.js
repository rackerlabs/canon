var hideDropdown = function() {
	$('.rs-dropdown-menu.visible').removeClass("visible").addClass('hidden');
}

$(document).ready(function() {
	
	$('.rs-dropdown-link').click(function(e) {
		hideDropdown();
		e.stopPropagation();
	});

	$(".rs-dropdown-toggle").click(function(e) {
		e.stopPropagation();
		hidePopover();
		hideDropdown();
		showOverlay();
		$(this).siblings('.rs-dropdown-menu').addClass("visible").removeClass('hidden');
	});

});