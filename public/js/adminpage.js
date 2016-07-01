$(document).ready(function() {
	$('div#profittab').hide();
	setTimeout(function() {
		$('div#profittab').show().addClass('animated flipInY');
	}, 1000);
	$('div#deposittab').hide();
	setTimeout(function() {
		$('div#deposittab').show().addClass('animated flipInY');
	}, 1100);
	$('div#withdrawtab').hide();
	setTimeout(function() {
		$('div#withdrawtab').show().addClass('animated flipInY');
	}, 1200);
	$('div#usertab').hide();

	$('a#usertabs').click(function(e){
		$('div#profittab').hide();
		$('div#deposittab').hide();
		$('div#withdrawtab').hide();

		setTimeout(function() {
			$('div#usertab').show().addClass('animated flipInY');
		}, 100);
	});

	$('a#moneytabs').click(function(e){
		$('div#usertab').hide();

		setTimeout(function() {
			$('div#profittab').show().addClass('animated flipInY');
		}, 100);
		$('div#deposittab').hide();
		setTimeout(function() {
			$('div#deposittab').show().addClass('animated flipInY');
		}, 200);
		$('div#withdrawtab').hide();
		setTimeout(function() {
			$('div#withdrawtab').show().addClass('animated flipInY');
		}, 300);
	});

	$('.datepicker').pickadate({
	    selectMonths: true,
	    selectYears: 1
  });
});
