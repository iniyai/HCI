var d = new Date(); // for now
var curhrs = d.getHours();
var curmins = d.getMinutes(); 
var hrs_hover = 0; // hovering over it should read out.
var blank_hover = 0;
var mins_hover = 0;
var keys = [];

function speak_out_time(){
    	var str = document.getElementById("hrs").value;
    	var str2 = document.getElementById("mins").value;
    	str = str % 24;
    	str2 = str2 % 60;
    	document.getElementById("hrs").value = str;
    	document.getElementById("mins").value = str2;
    	var time_msg = new SpeechSynthesisUtterance("Set for " + str + " hours and " + str2 + " minutes.");
    	window.speechSynthesis.speak(time_msg);
}

var msg = new SpeechSynthesisUtterance('The current time is: ' + curhrs + " : " + curmins);
window.speechSynthesis.speak(msg);
document.getElementById("hrs").value = curhrs;
document.getElementById("mins").value = curmins;

function myFunction() {
    	var alarm_mins = document.getElementById("mins").value;
    	var alarm_hrs = document.getElementById("hrs").value;
    	alarm_hrs = alarm_hrs % 24;
    	alarm_mins = alarm_mins % 60;
    	document.getElementById("hrs").value = alarm_hrs;
    	document.getElementById("mins").value = alarm_mins;
        var alarm_msg = new SpeechSynthesisUtterance('Alarm successfully set for ' + alarm_hrs + " : " + alarm_mins);
		window.speechSynthesis.speak(alarm_msg);
}

document.addEventListener("keydown",function(e){
	var keyCode = e.keyCode;
	if (keyCode == 70){ //f
		set_hrs();
	}
	else if (keyCode == 74){  // j
		set_mins();
	}
	else if ((keyCode == 71) || (keyCode == 72)){ // g and h
		speak_out_time();
	}
	else if ((keyCode == 68) || (keyCode == 75) || (keyCode == 27) || (keyCode == 32)){ // esc, d, k or space-bar
		 document.getElementById("hrs").value = document.getElementById("hrs").value.replace(/\D/g,'');
		 document.getElementById("mins").value = document.getElementById("mins").value.replace(/\D/g,'');
		 document.getElementById("hrs").blur();
		 document.getElementById("mins").blur();
		 myFunction();

	}
	else if (keyCode == 13){
		document.getElementById("sub").click();
	}
})

function set_hrs(){
	//if(hrs_hover == 0){\document.getElementById("hrs").value = curhrs;
	document.getElementById("hrs").value = '';
		var hrs_msg = new SpeechSynthesisUtterance('Enter the hours to be set for the alarm');
		window.speechSynthesis.speak(hrs_msg);
		document.getElementById("hrs").focus();
		blank_hover = 0;
		mins_hover = 0;
		hrs_hover = 1;
	//}
}

function set_mins(){
	//if(mins_hover == 0){document.getElementById("hrs").value = curhrs;
		document.getElementById("mins").focus();
		document.getElementById("mins").value = '';
		var mins_msg = new SpeechSynthesisUtterance('Enter the minutes to be set for the alarm');
		window.speechSynthesis.speak(mins_msg);
		blank_hover = 0;
		hrs_hover = 0;
		mins_hover = 1;
	//}	
}

function redirect(){
	window.location = "alarm-set.html";
}

function showInput() {
    var message_entered = document.getElementById("mins").value; 
    document.getElementById('disptime').innerHTML = message_entered;
}


