<html>
<body>

<center><h1>Alarm Set !!! <h1> </center> <br><br>
<h2>Hours:  <span id = "hrsval"><?php echo $_POST["fhours"]; ?> </span> </h2><br>
<h2>Minutes: <span id = "minsval"><?php echo $_POST["fmins"]; ?> </span> </h2>


<script>
	var alhrs = document.getElementById("hrsval").innerHTML;
	var almins = document.getElementById("minsval").innerHTML;

	function speakalt(){
		var alarm_msg = new SpeechSynthesisUtterance('Alarm successfully set for ' + alhrs + " hours, and " + almins + " minutes. ");
		window.speechSynthesis.speak(alarm_msg);
	}
	speakalt();
</script>

</body>
</html>
