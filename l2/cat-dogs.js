var correct = [0,0,0,0,0];

function randomImg(i){
    var animals = ["dog", "cat"];
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var randomAnimal = Math.floor(Math.random() * 2);
    var imgName = animals[randomAnimal] + "-" + randomNumber + ".jpg";
    document.getElementById("imageid" + i).src = imgName;
}

function images(){
    for (i = 0; i < 5; i++){
        randomImg(i);
    }
}

function check(imgElement,index){
    var name = imageElement.src;
    if(name.substring(0,3) == "cat"){
        correct[index] = 1;
    }
    else(){
        correct[index] = -1;
    }
        
}

function fincheck(){
    var flag = 1;
    for(i = 0; i < 5; i++) {
        if(correct[i] = -1){
            flag = 0;
            break;
        }
        else{
            continue;
        }
    }
    if(flag == 0){
        window.alert("Error");
    }
    if(flag == 1){
        window.alert("Correct");
    }
}

images();
//fincheck();
