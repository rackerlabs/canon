var processButtonGroup = function(formButtons) {
	formButtons.find('.rs-btn-primary').prop('disabled',true);
	formButtons.find('rs-btn-secondary').prop('disabled',true);
	formButtons.find('.rs-btn-link').addClass('rs-hidden');
	if(formButtons.find('.rs-processing-indicator').length > 0){
		formButtons.find('.rs-processing-indicator').removeClass('rs-hidden');
	} else {
		var processingIndicator = $('<i class="rs-processing-indicator"></i>');
		formButtons.append(processingIndicator);
	}
}

var resetButtonGroup = function(formButtons) {
	formButtons.find('.rs-btn-primary').prop('disabled',false).removeClass('rs-hidden');
	formButtons.find('rs-btn-secondary').prop('disabled',false).removeClass('rs-hidden');
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
			var submittingForm = $(this);
			processButtonGroup(formButtons);
			setTimeout(function(){
				hidePopover();
				submittingForm.find('.rs-btn-primary').prop('disabled',false);
				submittingForm.find('rs-btn-secondary').prop('disabled',false);
				submittingForm.find('.rs-btn-link').removeClass('rs-hidden');
				submittingForm.find('.rs-processing-indicator').addClass('rs-hidden');
			}, 3000);

		});
	});
});