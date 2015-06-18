$(document).ready(function() {
	
	$(".rs-collapsible-section .rs-detail-section-header").click(function()
	{
		$(this).parent().toggleClass("collapsed expanded");
	});

});