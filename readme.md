# jquery.bad-cop

A simple, lightweight jQuery plugin to notify users on attempts to contact.

## Installation

Include script *after* the jQuery library:

```html
<script src="/path/to/jquery.bad-cop.js"></script>
```

## Usage

Call the badCop method:

```javascript
$(document).ready(function(){
  $('.bad-cop').badCop()
})
```

Add a empty div tag where you want the bad cop to alert the users when they are behave badly.
```
<div class="bad_cop_alert"></div>
```

## Default options

alert_selector: '.bad_cop_alert',

alert_message: 'You may not communicate with users directly or provide your email, Skype, or phone number',

alert_message_colour: '#FF0000' // Red

## Contributing

Any suggestion, idea or pull request will be helpful


## Authors

[Itamar Yunger](http://linkedin.com/in/itamaryu)
