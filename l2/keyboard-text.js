var str = "";

function showoutput(){
    document.getElementById("key-text").value=str
}

function delChar(){
    str = str.substring(0,str.length - 1);
    showoutput();
}

function insertChar(c){
    str = str.concat(c);
    showoutput();
}