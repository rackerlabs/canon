var overlay;

var hideOverlay = function(){
	overlay.removeClass('rs-visible').addClass('rs-hidden');
}

var showOverlay = function() {
	overlay.removeClass('rs-hidden').addClass('rs-visible');
}

$(document).ready(function() {
	$('body').append('<div class="rs-overlay rs-hidden"></div>');
	overlay = $('.rs-overlay');
	overlay.click(function() {
		hidePopover();
		hideDropdown();
		hideOverlay();
	});
});