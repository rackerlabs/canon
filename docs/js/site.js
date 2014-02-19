var highlighter;
var highlightTarget;

$(document).ready(function () {
	var navSecondary = $(".nav-secondary-affix");

	if (navSecondary.length) {
		navSecondary.attr("data-offset-top",navSecondary.offset().top - $(".nav-utility").height() - 3).wrap('<div class="nav-affix-wrapper"></div>');
		$(".nav-affix-wrapper").css("height",navSecondary.height()+"px");
	}

	$('.tip').each(function (i, element) {
		var tooltip;
		tooltip = new canon.Tooltip();
		tooltip.attach(element);
	});

	$(".highlight-source").hover(function() {

		if($('#highlighter').length == 0) {
			$('body').append('<div id="highlighter"></div>');
			highlighter = $("#highlighter");
		}

		highlightTarget = $("#"+$(this).attr("data-highlight-target"));

		if(highlightTarget.hasClass("hidden")) {
			highlightTarget.addClass('visible').removeClass("hidden");
		}

		highlighter.css('top',highlightTarget.offset().top-6+'px').css('left',highlightTarget.offset().left-6+'px').css('width',highlightTarget.outerWidth()+12+'px').css('height',highlightTarget.outerHeight()+12+'px').show();

		}, function() {
			highlighter.hide();
			if(highlightTarget.hasClass("visible")) {
				highlightTarget.addClass('hidden').removeClass("visible");
			}
		});

	$(".rs-select-table tr").click(function() {
		var row = $(this);

		if(row.find(".rs-table-radio").length > 0) {
			row.siblings(".selected").removeClass("selected");
			row.find("input").prop("checked",true);
			row.addClass("selected");
		} else {
			if(row.find("input").prop("checked")) {
				row.removeClass("selected");
				row.find("input").prop("checked",false);
			} else {
				row.addClass("selected");
				row.find("input").prop("checked",true);
			}
		}
	});

	$(".rs-select-table input:checkbox").click(function(e) {
		var checkbox = $(this);
		e.stopPropagation();
		checkbox.closest("tr").toggleClass("selected");
	});

	$(".rs-tabs a").click(function()
	{
		this.blur();
		var content = $($(this).attr("href"));
		content.addClass("active").siblings(".active").removeClass("active");
		$(this).parent().addClass("active").siblings(".active").removeClass("active");
		return false;
	});

	$('.rs-btn').click(function() {
		hidePopover();
	});

	$(".rs-collapsible-section .rs-detail-section-header").click(function()
	{
		$(this).parent().toggleClass("collapsed expanded");
	});
});
