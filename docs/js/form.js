//This batch delete script is PURELY for demo purposes.  Should not be used for actual batch deletes.
var batchDeleteExample = function() {

	var interval = 1000;
	var i = 0;

	var form = $('#confirm-batch-delete-popover form');
	var formButtons = form.find('.rs-btn-group');
	var rows = form.find('.rs-list-table tbody tr');
	var totalRows = rows.length;
	var rowsDeleted = 0;

	processButtonGroup(formButtons);

	rows.addClass('rs-table-progress-ok').find('.item-status').text('Deleting {Item}');
	$('#confirm-batch-delete-popover .rs-delete').css('visibility','hidden');

	rows.each(function() {
		var row = $(this);

		setTimeout(function() {
			row.removeClass('rs-table-progress-ok').find('.item-status').text('Deletion Requested');
			row.find('.rs-table-icon').html('<i class="rs-status-ok"></i>');
			if(rowsDeleted == totalRows) {

			} else {
				rowsDeleted++;
			}
		},i*interval+(interval*3));

		i++;
	});
}

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