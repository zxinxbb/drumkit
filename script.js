let A = document.getElementById("A")
let S = document.getElementById("S")
let D = document.getElementById("D")
let F = document.getElementById("F")
let G = document.getElementById("G")
let H = document.getElementById("H")
let J = document.getElementById("J")
let K = document.getElementById("K")
let L = document.getElementById("L")


A.addEventListener("click", myPlayA)
function myPlayA(){
    let audio = new Audio("sounds/boom.wav");
    audio.play();
}
S.addEventListener("click", myPlayS)
function myPlayS(){
    let audio = new Audio("sounds/clap.wav");
    audio.play();
}

D.addEventListener("click", myPlayD)
function myPlayD(){
    let audio = new Audio("sounds/hihat.wav");
    audio.play();
}
F.addEventListener("click", myPlayF)
function myPlayF(){
    let audio = new Audio("sounds/kick.wav");
    audio.play();
}
G.addEventListener("click", myPlayG)
function myPlayG(){
    let audio = new Audio("sounds/openhat.wav");
    audio.play();
}
H.addEventListener("click", myPlayH)
function myPlayH(){
    let audio = new Audio("sounds/ride.wav");
    audio.play();
}
J.addEventListener("click", myPlayJ)
function myPlayJ(){
    let audio = new Audio("sounds/snare.wav");
    audio.play();
}
K.addEventListener("click", myPlayK)
function myPlayK(){
    let audio = new Audio("sounds/tink.wav");
    audio.play();
}
L.addEventListener("click", myPlayL)
function myPlayL(){
    let audio = new Audio("sounds/tom.wav");
    audio.play();
}


//

document.addEventListener("keydown", (event)=>{
   let key = event.key 
    if (key == 'a'){
         myPlayA()
    }
    else if(key=='s'){
        myPlayS()
    }
    else if(key=='d'){
        myPlayD()
    }
    else if(key=='f'){
        myPlayF()
    }
    else if(key=='g'){
        myPlayG()
    }
    else if(key=='h'){
        myPlayH()
    }
    else if(key=='j'){
        myPlayJ()
    }
    else if(key=='k'){
        myPlayK()
    }
    else if(key=='l'){
        myPlayL()
    }
})

//i know my code is quite unfunctional as theres too many repeats but i wasnt sure how to simplify it
