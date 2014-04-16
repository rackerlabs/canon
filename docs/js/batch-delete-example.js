//THIS SCRIPT IS PURELY FOR DEMONSTRATING BATCH DELETE INTERACTION
// IT SHOULD NOT BE USED FOR ACTUAL BATCH DELETION PROCESSES

//hacky variables to hold data outside of scope of batch functions
var rowSuccess = true;
var requestsBeingProcessed = 0;
var totalRequestsInCue = 0;
var successfulRequests = 0;
var failedRequests = 0;
var retrying = false;
var confirmBatchDeletePopover;

$(document).ready(function() {

  confirmBatchDeletePopover = $('#confirm-batch-delete-popover');

  $('#delete-items-button').click(function() {
    var exampleInstructions = $('#confirm-batch-delete-popover .example-instructions');
    var popoverTbody = $('#confirm-batch-delete-popover tbody');

    popoverTbody.empty();

    $('#list-view-table tbody tr.selected').each(function() {
      var deletionRow = '<tr data-row-id="'+$(this).attr('id')+'">'+
                          '<td class="rs-table-icon"></td>'+
                          '<td class="rs-table-text item-name rs-no-wrap">'+$(this).find('.item-name').text()+'</td>'+
                          '<td class="rs-table-text item-status rs-no-wrap">Pending Deletion</td>'+
                          '<td class="rs-table-delete">'+
                            '<button type="button" class="rs-delete remove-from-deletion"></button>'+
                          '</td>'+
                        '</tr>';
      popoverTbody.append(deletionRow);
    });

    exampleInstructions.html('<strong>Permanently delete</strong> the following '+popoverTbody.find('tr').length+' items?');
    $('.remove-from-deletion').click(function() {
      var tbody = $(this).closest('tbody');
      $(this).closest('tr').remove();
      exampleInstructions.html('<strong>Permanently delete</strong> the following '+popoverTbody.find('tr').length+' items?');
      if(!tbody.find('tr').length) {
        hidePopover();
      }
    });
  });
});

//Function for retrying failed actions
var retryFailedActions = function() {
  retrying = true;
  rowSuccess = true;
  requestsBeingProcessed = 0;
  totalRequestsInCue = 0;
  successfulRequests = 0;
  failedRequests = 0;
  confirmBatchDeletePopover.find('.rs-status-ok').closest('tr').remove();
  confirmBatchDeletePopover.find('.rs-table-icon').empty();
  confirmBatchDeletePopover.find('.rs-status-error').removeClass('rs-status-error');
  batchDeleteExample();
}


//dumb function for setting text on the popover instructions
var updateBatchInstructionText = function() {
  //Get the numbers of processing items for displaying in the popover
  requestsBeingProcessed = confirmBatchDeletePopover.find('.rs-activity-ok').length;
  totalRequestsInCue = confirmBatchDeletePopover.find('tbody tr').length;

  //set the info text at the top of the popover to reflect completed deletion requests
  confirmBatchDeletePopover.find('.example-instructions').html("<strong>"+successfulRequests+" of "+totalRequestsInCue+"</strong>  items deleted");
}

//The function that runs batch delete items through the rigors for showing status
var batchDeleteExample = function() {

  //Interval determines the amount of time between each Deletion Request Completion
  var interval = 500;

  //Just an iterator for multiplying interval for each row in the popover
  var i = 0;

  //Stash the elements in variables for easier access
  var form = confirmBatchDeletePopover.find('form');
  var formButtons = form.find('.rs-btn-group');
  var rows = form.find('.rs-list-table tbody tr');

  //Set the button group on the popover into processing state
  processButtonGroup(formButtons);

  //add the progress background animation to each row being processed
  rows.addClass('rs-activity-ok').find('.item-status').text('Deleting {Item}');

  updateBatchInstructionText();

  //Hide the delete buttons from the popover table
  confirmBatchDeletePopover.find('.rs-delete').css('visibility','hidden');

  //Iterate over each row in the popover table to start the interval for changing each row's status
  rows.each(function() {
    var row = $(this);

    setTimeout(function() { 

      if(rowSuccess) {
        //Increment successful requests
        successfulRequests++;

        //Set the striped class using the row id for the affected row in the parent List View table
        var affectedRowInParent = $("#"+row.attr('data-row-id'));
        affectedRowInParent.find('.rs-table-status').addClass('rs-table-status-striped');
        affectedRowInParent.removeClass('selected').find('input:checkbox').prop('checked',false)
        //Set the status ok icon in the first column of the popover table
        row.find('.rs-table-icon').html('<i class="rs-status-ok"></i>');
        
        //Change the status verbiage for each row in the popover
        row.removeClass('rs-activity-ok').find('.item-status').text('Deletion Requested');
        
        if(!retrying) {
          //Toggle success for next row
          rowSuccess = false;
        }

      } else {
        //Increment failed requests
        failedRequests++;

        //Change the status verbiage for each row in the popover
        row.removeClass('rs-activity-ok').find('.item-status').text('Failed Deletion Request');

        //Set the status error icon in the first column of the popover table
        row.find('.rs-table-icon').html('<i class="rs-status-error"></i>');

        //Turn the row text red
        row.addClass('rs-status-error');

        //Toggle success for next row
        rowSuccess = true;
      }

      updateBatchInstructionText();

      //If the number of completed deletion requests is equal to the total number of items being deleted
      //reset the button group on the modal and show the close popover button
      if(requestsBeingProcessed == 0) {
        var formButtons = confirmBatchDeletePopover.find('.rs-btn-group');
        resetButtonGroup(formButtons);
        formButtons.find('.rs-btn-primary').addClass('rs-hidden');
        formButtons.find('rs-btn-secondary').addClass('rs-hidden');
        formButtons.find('.rs-btn-link').addClass('rs-hidden');

        if(failedRequests == 0) {
          formButtons.find('.close-popover').removeClass('rs-hidden');
          $('#delete-items-button').prop('disabled',true);
          $('.select-all').prop('checked',false);
        } else {
          formButtons.find('.retry-failed').removeClass('rs-hidden').text('Retry '+failedRequests+' Failed Actions');
          formButtons.find('.rs-btn-link').removeClass('rs-hidden')
        }
      }

    },i*interval+(interval*2));

    i++;
  });
}