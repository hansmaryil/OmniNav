$(document).ready(function () {
	$('.navbar-scroll').on('click', function (event) {
		event.preventDefault();
	    var divID = '#' + this.getAttribute('data-target');
	    var scroll_point = $(divID).offset().top - $("#fixed-navbar").outerHeight(true);
	    $('html, body').animate({
	        scrollTop: scroll_point
	    }, 1000);
	});
});