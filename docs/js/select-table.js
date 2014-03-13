var toggleBatchAction = function(sourceElement){

	var table;

	if(sourceElement.closest('.rs-embedded-list-table-wrapper').length) { 
		table = sourceElement.closest('.rs-embedded-list-table-wrapper');
	} else {
		table = sourceElement.closest('.rs-list-table');
	}

	var deleteRowButton = table.siblings('.rs-btn-group').find('.modify-selected');

	if(deleteRowButton.length) {
		if(table.find('input:checked').length == 0) {
			deleteRowButton.prop('disabled',true);
		} else {
			deleteRowButton.prop('disabled',false);
		}
	}
}

$(document).ready(function() {
	
	$(".rs-select-table tbody tr").click(function() {
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
		toggleBatchAction(row);
	});

	$(".rs-select-table input:checkbox").click(function(e) {
		var checkbox = $(this);
		checkbox.closest("tr").toggleClass("selected");
		toggleBatchAction(checkbox);
	});

	$(".rs-select-table .rs-table-link, .rs-select-table input, .rs-select-table .rs-plus, .rs-select-table select, .rs-status-list-item").click(function(e) {
		e.stopPropagation();
	});

	$(".rs-select-table .select-all").click(function(e) {
		var selectAll = $(this);
		var table;

		if(selectAll.closest('.rs-embedded-list-table-wrapper').length) { 
			table = selectAll.closest('.rs-embedded-list-table-wrapper');
		} else {
			table = selectAll.closest('.rs-list-table');
		}

		var deleteRowButton = table.siblings('.rs-btn-group').find('.modify-selected');

		if(selectAll.prop('checked')) {
			deleteRowButton.prop('disabled',false);
			table.find('tbody tr').addClass('selected').find('.rs-table-checkbox input[type=checkbox]').prop('checked',true);
		} else {
			deleteRowButton.prop('disabled',true);
			table.find('tbody tr').removeClass('selected').find('.rs-table-checkbox input[type=checkbox]').prop('checked',false);
		}
	});

});