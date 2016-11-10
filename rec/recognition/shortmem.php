<?php
session_start();
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
     
    <title>Short Term Memory</title>
    <link href="css/bootstrap.css" rel="stylesheet" media="screen" >
</head>
<body>
	<?php
	if(isset($_POST['click']))
	{
		if(($_SESSION['init']==$_SESSION['final']) && ("val0" == $_POST['selSS2']))
		{
			print("Identfied correctly..!!");
		}
		else{
			print("Not matching");
		}
		session_stop();
		//exit("Bye");
	}
	else{
	?>
	<div align="center" id="initial" class="active">
		<h1> Remember the image</h2>
			<?php
				$x= rand()%25 + 1;
				$initial_image=$x;
				$name_image=(String)$x.".jpg";
				$_SESSION['init']=$x;
				#print($name_image);
				#print("images/".$name_image);
			?>
		<div>
			<img src="<?php echo "images/".$name_image; ?>" width="480px" height="320px">
		</div>
	</div>
	<div align="center" id="recall" class="invisible">
		<h1> Recall the image</h2>
			<?php
				$x= 1;
				$_SESSION['final']=$x;
				$name_image=(String)$x.".jpg";
				#print($name_image);
				#print("images/".$name_image);
			?>
		<div>
			<img src="<?php echo "images/".$name_image; ?>" width="480px" height="320px">
		</div>
	<form name = "" action="shortmem.php" method="post">
		<div>
			<select name="selSS2" id="selSeaShells2" multiple="multiple" size="5">
			<option value="val0">Matching</option>
			<option value="val1">Not matching</option>
			</select>
			<input type = "submit" class="btn" name="click" value="match-chk"></input>
		</div>
	</form>
	</div>
	<script type="text/javascript"> 
		setTimeout(function(){
		document.getElementById("initial").classList.remove('active');
		document.getElementById("initial").classList.add('invisible');
		document.getElementById("recall").classList.remove('invisible');
		document.getElementById("recall").classList.add('active');		
		},2000);

	</script>
	<?php
		}
	?>	
	<div>

	</div>	
	
</body>
</html>