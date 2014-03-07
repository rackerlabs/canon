$(document).ready(function() {
	
	$(".rs-tabs a").click(function()
	{
		this.blur();
		var content = $($(this).attr("href"));
		content.addClass("active").siblings(".active").removeClass("active");
		$(this).parent().addClass("active").siblings(".active").removeClass("active");
		return false;
	});
	
});