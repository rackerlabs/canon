//var submittingForm;

$(document).ready(function() {
	$('.rs-form').each(function() {
		var form = $(this);
		var formButtons = form.find('.rs-btn-group');
		form.submit(function(e) {
			e.preventDefault();
			var submittingForm = $(this);
			formButtons.find('.rs-btn-primary').prop('disabled',true);
			formButtons.find('rs-btn-secondary').prop('disabled',true);
			formButtons.find('.rs-btn-link').addClass('rs-hidden');
			if(formButtons.find('.rs-processing-indicator').length > 0){
				formButtons.find('.rs-processing-indicator').removeClass('rs-hidden');
			} else {
				var processingIndicator = $('<i class="rs-processing-indicator"></i>');
				formButtons.append(processingIndicator);
			}
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