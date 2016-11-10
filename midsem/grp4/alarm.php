<!DOCTYPE html>
<html>
<head>
	  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>	  
<body>
</br></br></br></br></br></br>
</br></br></br></br></br></br>
<form action = "altime.php" method = "post">
<div class="row">
  <div class="col-md-3" style="background-color:lavender;" id = "hrs-space"><center> <h1> Hours: </h1><input type="text" style="font-size:30px;" name="fhours" id="hrs" onclick='javascript: this.value = ""' ><br>
  </center></div>
    <div class="col-md-6" style="background-color:lavenderblush;" id="blank-space"> <br>
  </div>
  <div class="col-md-3" style="background-color:lavender;" id = "mins-space"><center> <h1> Mins: </h1><input type="text" style="font-size:30px;" name="fmins" id = "mins" onclick='javascript: this.value = ""'  ><br>
  </center></div>		
</br></br></br></br> 
</br></br></br></br> 	
  <center><input type="submit" value = "Submit" style="font-size:30px;height:40px" id="sub" ><center>
</form>
</br></br></br></br> 
</br></br></br></br> 
<div id = "disptime" </div>
<script src = "alarm2.js"> </script>
</body>
</html>