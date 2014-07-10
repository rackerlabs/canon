var showPopover = function(popover) {
	hidePopover();
	$('.rs-tooltip').remove();
	var popover = $("#"+popover);
	popover.removeClass("rs-invisible").addClass("visible");
	showOverlay();
  popover.find('input[type=text],textarea,select').filter(':visible:first').focus();
};

var hidePopover = function() {
	var popover = $(".rs-popover.visible");
	if(popover.length) {
		resetButtonGroup(popover.find(".rs-btn-group"));
		$(".rs-popover.visible").removeClass("visible").addClass("rs-invisible");
		hideOverlay();
	}
};

var loadPopover = function(target, popover, position) {
	positionPopover(target, popover, position);
	showPopover(popover);
};

var positionPopover = function(target, popover, position) {

	var popover = $("#"+popover);
	popover.attr('data-current-target',target);
	popover.attr('data-current-position',position);

	var target = $("#"+target);
	var arrow = popover.find(".rs-popover-arrow");
	var targetWidth = target.width();
	var targetHeight = target.height();
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
	
	$('body').append($('.rs-popover'));

	$('.rs-popover .rs-btn-group .rs-btn-link, .close-popover').click(function() {
		hidePopover();
	});

	$('.rs-popover-source').each(function() {
		var popoverSource = $(this);

		popoverSource.click(function(e) {
			e.preventDefault();
			if(!popoverSource.prop('disabled')) {

				var target = popoverSource.attr("data-popover-target")
				var popover = popoverSource.attr("data-popover")
				var position = popoverSource.attr("data-popover-position");

				loadPopover(target, popover, position);
			}
		});
	});
});
