var start = 0;
var end = 0;

function buttonClk(y) {
	end = new Date();
	var time = end.getTime() - start.getTime();
	time = time / 1000 ;
	window.alert("Time taken was: " + time + " seconds.");
	clickMe(Math.floor(Math.random() * 8) + 1);
}

function clickMe(x) {
	document.getElementById('clickprompt').innerHTML = "Click B" + x;	
    start = new Date();
}

clickMe(Math.floor(Math.random() * 8) + 1);