var d = new Date(); // for now
var curhrs = d.getHours();
var curmins = d.getMinutes(); 
var hrs_hover = 0; // hovering over it should read out.
var blank_hover = 0;
var mins_hover = 0;

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

document.getElementById("blank-space").addEventListener("mouseover",function(e){
	//window.prompt(document.activeElement.id);
	if (blank_hover == 0){
		speak_out_time();
		hrs_hover = 0;
		mins_hover = 0;
		blank_hover = 1;
	}
})

document.getElementById("hrs-space").addEventListener("mouseover",function(e){
	if(hrs_hover == 0){
		var hrs_msg = new SpeechSynthesisUtterance('Enter the hours to be set for the alarm');
		window.speechSynthesis.speak(hrs_msg);
		document.getElementById("hrs").focus();
		blank_hover = 0;
		mins_hover = 0;
		hrs_hover = 1;
	}
})

document.getElementById("mins-space").addEventListener("mouseover",function(e){
	if(mins_hover == 0){
		var mins_msg = new SpeechSynthesisUtterance('Enter the minutes to be set for the alarm');
		window.speechSynthesis.speak(mins_msg);
		document.getElementById("mins").focus();
		blank_hover = 0;
		hrs_hover = 0;
		mins_hover = 1;
	}	
})


