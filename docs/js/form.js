//var submittingForm;

$(document).ready(function() {
	$('.rs-form, .rs-form-horizontal, .rs-form-vertical, .rs-form-create, form').each(function() {
		var form = $(this);
		var formButtons = form.find('.rs-btn-group');
		form.submit(function(e) {
			e.preventDefault();
			var submittingForm = $(this);
			formButtons.find('.rs-btn').prop('disabled',true).addClass('disabled');
			formButtons.find('.rs-btn-primary').addClass('loading');
			
			setTimeout(function(){
				hidePopover();
				submittingForm.find('.rs-btn').prop('disabled',false).removeClass('disabled').removeClass('loading');
			}, 3000);

		});
	});
});