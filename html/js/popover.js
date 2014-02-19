var popoverScreen;

var showPopover = function(source) {
	var popover = $("#"+source.attr("data-popover"));
	popover.removeClass("hidden").addClass("visible");
	popoverScreen.removeClass("hidden").addClass("visible");
};

var hidePopover = function() {
	popoverScreen.removeClass("visible").addClass("hidden");
	$(".rs-popover.visible").removeClass("visible").addClass("hidden");
};

var positionPopover = function(source) {
	var target = $("#"+source.attr("data-popover-target"));
	var popover = $("#"+source.attr("data-popover"));
	var arrow = popover.find(".rs-popover-arrow");
	var targetWidth = target.width();
	var targetHeight = target.height();
	var position = source.attr("data-popover-position");
	var top = target.offset().top;
	var left = target.offset().left;
	var arrowMargin = 24;

	switch(position) {
		case "right":
			arrow.addClass("rs-popover-arrow-left-top");
			left = left+targetWidth+arrow.width();
			top = top+(targetHeight/2)-(arrow.height()/2)-arrowMargin;
		break;

		case "left":
			arrow.addClass("rs-popover-arrow-right-top");
			top = top+(targetHeight/2)-(arrow.height()/2)-arrowMargin;
			left = left-popover.width()-(arrow.width()/2);
		break;

		case "bottom-right":
			arrow.addClass("rs-popover-arrow-top-left");
      arrow.removeClass("rs-popover-arrow-top-right");
			top = top + target.outerHeight() + 15;
			left = left + (target.outerWidth() / 2) - 34;
		break;

		case "bottom-left":
			arrow.addClass("rs-popover-arrow-top-right");
      arrow.removeClass("rs-popover-arrow-top-left");
			top = top + target.outerHeight() + 15;
			left = left + target.outerWidth() - popover.outerWidth() - 18;
		break;
	}

	popover.css("top",top+"px").css("left", left+"px");
};

$(document).ready(function () {
	$('body').append('<div class="rs-popover-screen hidden"></div>');

	popoverScreen = $('.rs-popover-screen');

	popoverScreen.click(function() {
		hidePopover();
	});
	
	$('.rs-popover .rs-btn-group .rs-btn').click(function() {
		hidePopover();
	});

	$('.rs-popover-source').each(function() {

		var popoverSource = $(this);

		positionPopover(popoverSource);

		popoverSource.click(function() {
			positionPopover(popoverSource);
			showPopover(popoverSource);
		});

	});

});
