var overlay;

var hideOverlay = function(){
	overlay.removeClass('visible').addClass('hidden');
}

var showOverlay = function() {
	overlay.removeClass('hidden').addClass('visible');
}

$(document).ready(function() {
	$('body').append('<div class="rs-overlay hidden"></div>');
	overlay = $('.rs-overlay');
	overlay.click(function() {
		hidePopover();
		hideDropdown();
		hideOverlay();
	});
});