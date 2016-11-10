var start = 0;
var end = 0;

function textdisapp() {
    setTimeout(function(){document.getElementById("textinp").innerHTML = "DFEC"},500);
    setTimeout(function(){document.getElementById("textinp").innerHTML = ""},1500);
    setTimeout(function(){document.getElementById("text-val").style.visibility = 'visible'},1500);
    setTimeout(function(){start = new Date()},1500);
}

function eval(){
    str = document.getElementById("user-val").value;
    end = new Date();
    var time = end.getTime() - start.getTime();
    if (str == "DFEC"){
        window.alert("Right answer " + time + " milliseconds.");
    }
    else{
        window.alert("Wrong Answer " + time + " milliseconds.");
    }
        
}

textdisapp();