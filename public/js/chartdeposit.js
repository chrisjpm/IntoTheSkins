var depositData = {
	labels : ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
	datasets : [
		{
			fillColor : "rgba(27,154,196,0.4)",
			strokeColor : "rgba(34,125,156,0.6)",
			pointColor : "#fff",
			pointStrokeColor : "rgba(34,125,156,0.6)",
			data : [203,156,99,251,305,247,303]
		}
	]
}

var deposit = document.getElementById('chartuserdeposit').getContext('2d');
new Chart(deposit).Line(depositData);
