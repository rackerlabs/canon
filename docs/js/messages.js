var growlContainer;

var growl = function(message) {
  var thisGrowl = $('<div class="rs-message">'+
                    '<i class="rs-message-icon"></i>'+
                    '<button type="button" class="rs-close"></button>'+
                    '<div class="rs-message-content"></div>'+
                  '</div>');
  var thisGrowlContent = thisGrowl.find('.rs-message-content');
  var messageTimeout = 5000;

  if(message.status) {
    thisGrowl.addClass('rs-status-'+message.status);

    if(message.status == 'ok') {
      messageTimeout = 8000;
    } else if(message.status == 'warning') {
      messageTimeout = 16000;
    } else if(message.status == 'error') {
      messageTimeout = 24000;
    }

    thisGrowl.timeout = setTimeout(function() {
      thisGrowl.fadeOut('normal', function() {
        thisGrowl.remove();
      });
    }, messageTimeout);

  } else {
    thisGrowl.addClass('rs-status-info');
  }

  if(message.title) {
    thisGrowlContent.append('<div class="rs-message-title">'+message.title+'</div>');
  }

  if(message.description) {
    thisGrowlContent.append('<div class="rs-message-description">'+message.description+'</div>');
  }

  thisGrowl.find('.rs-close').click(function() {
    var thisMessage = $(this).closest('.rs-message');

    thisMessage.fadeOut('normal',function() {
      thisMessage.remove();
    });
  });

  growlContainer.prepend(thisGrowl);
}

$(document).ready(function() {

  growlContainer = $('.rs-growl-messages');

  growl({status: 'ok', title: 'This is a growl OK message.', description: 'This class stays on screen for 6 seconds, then disappears.'});
  growl({status: 'warning', title: 'This is a growl WARNING message.', description: 'This class stays on screen for 16 seconds, then disappears.'});
  growl({status: 'error', title: 'This is a growl ERROR message.', description: 'This class stays on screen for 24 seconds, then disappears.'});
  growl({title: 'This is a growl INFO message.', description: 'This is the default message type, but may not make much sense as a growl.'});
});