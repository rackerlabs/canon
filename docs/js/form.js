var processButtonGroup = function(formButtons) {
	formButtons.find('.rs-btn').prop('disabled',true);
	formButtons.find('.rs-btn-link').addClass('rs-hidden');
	if(formButtons.find('.rs-processing-indicator').length > 0){
		formButtons.find('.rs-processing-indicator').removeClass('rs-hidden');
	} else {
		var processingIndicator = $('<i class="rs-processing-indicator"></i>');
		formButtons.append(processingIndicator);
	}
}

var resetButtonGroup = function(formButtons) {
	formButtons.find('.rs-btn').prop('disabled',false).removeClass('rs-hidden');
	formButtons.find('.rs-btn-link').removeClass('rs-hidden').removeClass('rs-hidden');
	formButtons.find('.hide-on-reset').addClass('rs-hidden');
	if(formButtons.find('.rs-processing-indicator').length > 0){
		formButtons.find('.rs-processing-indicator').addClass('rs-hidden');
	} else {
		var processingIndicator = $('<i class="rs-processing-indicator rs-hidden"></i>');
		formButtons.append(processingIndicator);
	}
}

$(document).ready(function() {
	$('.rs-form').each(function() {
		var form = $(this);
		var formButtons = form.find('.rs-btn-group');
		form.submit(function(e) {
			e.preventDefault();
			var submittingForm = $(this).find('.rs-btn-group');
			processButtonGroup(formButtons);
			setTimeout(function(){
				hidePopover();
				resetButtonGroup(submittingForm);
				if(form.attr('action')) {
					window.location = form.attr('action');
				}
			}, 1000);

		});
	});
});