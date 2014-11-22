var highlighter;
var highlightTarget;

var highlight = function(target) {
	if(target.hasClass("rs-hidden")) {
		target.addClass('visible').removeClass("rs-hidden");
	} else if (target.hasClass("rs-invisible")) {
		target.addClass('visible').removeClass("rs-invisible");
	}
	var top = target.offset().top-6+"px";
	var left = target.offset().left-6+"px";
	var width = target.outerWidth()+12+"px";
	var height = target.outerHeight()+12+"px";
	highlighter.css('top',top).css('left',left).css('width',width).css('height',height).show();
}

var unHighlight = function(target) {
	highlighter.hide();
	if(target.hasClass("visible") && !target.hasClass("rs-popover")) {
		target.addClass('rs-hidden').removeClass("visible");
	} else if(target.hasClass("rs-popover")) {
		target.addClass('rs-invisible').removeClass("visible");
	}
}

$(document).ready(function() {
	highlighter = $('<div id="highlighter"></div>');
	$('body').append(highlighter);
	$(".highlight-source").hover(function() {
		highlightTarget = $("#"+$(this).attr("data-highlight-target"));
		highlight(highlightTarget);
		}, function() {
			unHighlight(highlightTarget);
		});

});