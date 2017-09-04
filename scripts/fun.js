$(function() {
	var iframe = $('#player1')[0],
	    player = $f(iframe),
	    status = $('.status');

	// When the player is ready, add listeners for pause, finish, and playProgress
	player.addEvent('ready', function() {
	    status.text('ready');
	    
	    player.addEvent('pause', onPause);
	    player.addEvent('finish', onFinish);
	    player.addEvent('playProgress', onPlayProgress);
	});

	// Call the API when a button is pressed
	$('button').bind('click', function() {
	    player.api($(this).text().toLowerCase());
	});

	function onPause(id) {
	    $('#breakdown-container').slideUp("slow");
	}

	function onFinish(id) {
	    $('#breakdown-container').slideUp("slow");
	}

	function onPlayProgress(data, id) {
		$('#breakdown-container').slideDown("slow");

		if (data.seconds<6) {
			$('#breakdown-container').scrollTo($('#bd00'), 10);
		}
		if (data.seconds>6 && data.seconds<17) {
			$('#breakdown-container').scrollTo($('#bd01'), 10);
		}
		if (data.seconds>17 && data.seconds<21) {
			$('#breakdown-container').scrollTo($('#bd02'), 10);
		}
		if (data.seconds>21 && data.seconds<26) {
			$('#breakdown-container').scrollTo($('#bd03'), 10);
		}
		if (data.seconds>26 && data.seconds<32) {
			$('#breakdown-container').scrollTo($('#bd04'), 10);
		}
		if (data.seconds>32 && data.seconds<35) {
			$('#breakdown-container').scrollTo($('#bd05'), 10);
		}
		if (data.seconds>35 && data.seconds<41) {
			$('#breakdown-container').scrollTo($('#bd06'), 10);
		}
		if (data.seconds>41 && data.seconds<43) {
			$('#breakdown-container').scrollTo($('#bd07'), 10);
		}
		if (data.seconds>43 && data.seconds<47) {
			$('#breakdown-container').scrollTo($('#bd08'), 10);
		}
		if (data.seconds>47 && data.seconds<56) {
			$('#breakdown-container').scrollTo($('#bd09'), 10);
		}
		if (data.seconds>56 && data.seconds<60) {
			$('#breakdown-container').scrollTo($('#bd10'), 10);
		}
		if (data.seconds>60 && data.seconds<69) {
			$('#breakdown-container').scrollTo($('#bd11'), 10);
		}
		if (data.seconds>69 && data.seconds<78) {
			$('#breakdown-container').scrollTo($('#bd12'), 10);
		}
		if (data.seconds>78 && data.seconds<81) {
			$('#breakdown-container').scrollTo($('#bd13'), 10);
		}
		if (data.seconds>81 && data.seconds<86) {
			$('#breakdown-container').scrollTo($('#bd14'), 10);
		}
		if (data.seconds>86 && data.seconds<88) {
			$('#breakdown-container').scrollTo($('#bd15'), 10);
		}
		if (data.seconds>88 && data.seconds<91) {
			$('#breakdown-container').scrollTo($('#bd16'), 10);
		}
		if (data.seconds>91 && data.seconds<94) {
			$('#breakdown-container').scrollTo($('#bd17'), 10);
		}
		if (data.seconds>94 && data.seconds<96) {
			$('#breakdown-container').scrollTo($('#bd18'), 10);
		}
		if (data.seconds>96 && data.seconds<100) {
			$('#breakdown-container').scrollTo($('#bd19'), 10);
		}
		if (data.seconds>100 && data.seconds<108) {
			$('#breakdown-container').scrollTo($('#bd20'), 10);
		}
		if (data.seconds>108 && data.seconds<114) {
			$('#breakdown-container').scrollTo($('#bd21'), 10);
		}
		if (data.seconds>114 && data.seconds<118) {
			$('#breakdown-container').scrollTo($('#bd22'), 10);
		}
		if (data.seconds>118 && data.seconds<120) {
			$('#breakdown-container').scrollTo($('#bd23'), 10);
		}
		if (data.seconds>120) {
			$('#breakdown-container').scrollTo($('#bd24'), 10);
		}
	    status.text(data.seconds + 's played');
	}
});