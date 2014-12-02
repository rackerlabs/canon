var showPopover = function(source) {
	$('.rs-tooltip').remove();
	var popover = $("#"+source.attr("data-popover"));
	popover.removeClass("invisible").addClass("visible");
	showOverlay();
};

var hidePopover = function() {
	$(".rs-popover.visible").removeClass("visible").addClass("invisible");
	hideOverlay();
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

	arrow.removeAttr('class').addClass('rs-popover-arrow');

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
			top = top + target.outerHeight() + 15;
			left = left + (target.outerWidth() / 2) - 34;
		break;
		case "bottom-left":
			arrow.addClass("rs-popover-arrow-top-right");
			top = top + target.outerHeight() + 15;
			left = left + (target.outerWidth()/2) - arrow.position().left - (arrow.outerWidth()/1.5);
		break;
	}
	popover.css("top",top+"px").css("left", left+"px");
};

$(document).ready(function () {
	$('.rs-popover .rs-btn-group .rs-btn-link').click(function() {
		hidePopover();
	});

	$('.rs-popover-source').each(function() {
		var popoverSource = $(this);
		positionPopover(popoverSource);

		popoverSource.click(function() {
			if(!popoverSource.prop('disabled')) {
				positionPopover(popoverSource);
				showPopover(popoverSource);
			}
		});
	});
});
