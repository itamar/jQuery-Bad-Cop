/**
* jQuery Bad Cop Plugin - V 0.0.1
*
* @author Itamar Yunger <itamar@yunger.co>, 2014
*/

(function($) {
  
  $.fn.badCop = function() {
    
    // Defaults
    var defaults = {
      alert_selector: '.bad_cop_alert', 
      alert_message: 'You may not communicate with users directly or provide your email, Skype, or phone number', 
      alert_message_colour: '#FF0000' // Red
    }
    
    // Merge default settings with user settings
    var options = $.extend(defaults , options);
    
    // Our Regex - Our gold
    var regex_expressions = /email|skype.me|skype|msn|messanger|contact.me.at|send.to.my|@|\[at\]|\(at\)|\{at\}|\-at\-|\+at\+|\[dot\]|\(dot\)|\{dot\}|\-dot\-|\+dot\+/i

    // Bad cop in action
    this.each( function() {
      $(this).on('keyup', function(){
        text = $(this).val();
        if(text.match(regex_expressions)) {
          $(options['alert_selector']).text(options['alert_message'])
            .css('color', options['alert_message_colour'])
            .show();
        } else {
          $(options['alert_selector']).hide();
        }
      })
    });

    return this;
  }
  
}(jQuery));