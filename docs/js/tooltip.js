var tooltipTimer;

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
		var timeOut = 0;
		if(params.delay){
			timeOut = eval(params.delay)*1000;
		}
		tooltipTimer = setTimeout(function(){$('body').append(tooltip)}, timeOut);
		return tooltip;
}

$(document).ready(function() {
	$('.tip').each(function() {
		$(this).attr('data-title',$(this).attr('title')).removeAttr('title');
	});
	$('.tip').hover(function(event) {
		clearTimeout(tooltipTimer);
		var tooltip = new Object();
		tooltip.contents = $(this).attr('data-title');
		tooltip.delay = $(this).attr('data-delay');
		tooltip.left = event.clientX;
		tooltip.top = $(document).scrollTop()+event.clientY;
		attachTooltip(tooltip);
	}, function(e) {
		removeTooltips();
		clearTimeout(tooltipTimer);
	});

});