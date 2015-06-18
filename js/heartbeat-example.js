var heartbeatOk = function() {
	$("#heartbeat-example tbody tr:nth-child(3)").removeClass('rs-heartbeat-error');
	$("#heartbeat-example tbody tr:nth-child(1)").addClass('rs-heartbeat-ok');
}

var heartbeatWarning = function() {
	$("#heartbeat-example tbody tr:nth-child(1)").removeClass('rs-heartbeat-ok');
	$("#heartbeat-example tbody tr:nth-child(2)").addClass('rs-heartbeat-warning');
}

var heartbeatError = function() {
	$("#heartbeat-example tbody tr:nth-child(2)").removeClass('rs-heartbeat-warning');
	$("#heartbeat-example tbody tr:nth-child(3)").addClass('rs-heartbeat-error');
}

$(document).ready(function() {
	if($("#heartbeat-example").length) {

		$("#heartbeat-example tbody tr").removeAttr('class');
	
		setTimeout(function(){
			heartbeatOk();
			setInterval(function(){
				heartbeatOk();
			},9000);
		},0);

		setTimeout(function(){
			heartbeatWarning();
			setInterval(function(){
				heartbeatWarning();
			},9000);
		},3000);

		setTimeout(function(){
			heartbeatError();
			setInterval(function(){
				heartbeatError();
			},9000);
		},6000);
	}
});