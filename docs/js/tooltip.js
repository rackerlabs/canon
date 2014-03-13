var attachTipTimer;
var removeTipTimer;
var hideTipTimeout = 1000;

var removeTooltips = function() {
	$('.rs-tooltip').remove();
}

var attachTooltip = function(params) {
		var tipDistance = 5;
		var newLeft = params.left + tipDistance;
		var newTop =  params.top + tipDistance;
		var tooltip = $('<div class="rs-tooltip visible" style="top: '+newTop+'px; left: '+newLeft+'px">'+
												'<div class="rs-tooltip-inner">'+
    											params.contents+
  											'</div>'+
											'</div>');
		var timeout = 0;
		if(params.delay){
			timeout = eval(params.delay)*1000;
		}
		attachTipTimer = setTimeout(function(){$('body').append(tooltip);}, timeout);

		tooltip.hover(function() {
			clearTimeout(removeTipTimer);
			clearTimeout(attachTipTimer);
		}, function() {
			clearTimeout(attachTipTimer);
			removeTipTimer = setTimeout(function(){removeTooltips();}, hideTipTimeout);
		});

		return tooltip;
}

$(document).ready(function() {
	$('.tip').each(function() {
		$(this).attr('data-title',$(this).attr('title')).removeAttr('title');
	});
	$('.tip').hover(function(event) {
		removeTooltips();
		clearTimeout(removeTipTimer);
		clearTimeout(attachTipTimer);
		var tooltip = new Object();
		tooltip.contents = $(this).attr('data-title');
		tooltip.delay = $(this).attr('data-delay');
		tooltip.left = event.clientX;
		tooltip.top = $(document).scrollTop()+event.clientY;
		attachTooltip(tooltip);
	}, function(e) {
		clearTimeout(attachTipTimer);
		removeTipTimer = setTimeout(function(){removeTooltips();}, hideTipTimeout);
	});
});