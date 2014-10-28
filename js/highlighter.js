var highlighter;
var highlightTarget;

var highlight = function(target) {
	if(target.hasClass("hidden")) {
		target.addClass('visible').removeClass("hidden");
	} else if (target.hasClass("invisible")) {
		target.addClass('visible').removeClass("invisible");
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
		target.addClass('hidden').removeClass("visible");
	} else if(target.hasClass("rs-popover")) {
		target.addClass('invisible').removeClass("visible");
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