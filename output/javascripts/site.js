$(document).ready(function() {

	// I'm on the outside
	var internalLink = window.location.hostname
	$("a[href^=http]")
		.not("a[href*='" + internalLink + "']")
		.addClass('link external')
		.attr('target', '_blank');

	// -- place handcrafted-webby specific jQuery above this line -- //	
	// -- place application specific jQuery below this line -- //
	
});

jQuery.ajaxSetup({ 
  'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")} 
});