$(document).ready(function() {
	$(".a-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$('#toggleftauc').click(function() {
		$("#featuredaucContainer").slideToggle('fast');
	});
	$('#toggleliveaucs').click(function() {
		$("#liveaucsContainer").toggle('slide');
	});
	$('#toggleupcomingaucs').click(function() {
		$("#upcomingaucsContainer").toggle('slide');
	});
	$('.parallax').parallax();
	$('.collapsible').collapsible({
      accordion : false
    });
});
