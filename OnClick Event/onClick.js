var myVar = document.querySelector("#paraId");
function myMessage1(){
    // alert("I'm button 1");
    // var myVar = document.querySelector("#paraId");
    myVar.innerHTML = "You have clicked button 1."
}

function myMessage2(){
    // alert("I'm button 2");
    // var myVar = document.querySelector("#paraId");
    myVar.innerHTML = "You have clicked button 2."
}

// function demo(){
//     alert("I'm paragraph");
// }

var pic = document.querySelector("#myImage");

function rose(){
    // image er src path change.
    pic.src = "images/rose.webp";
}
function jesmin(){
    pic.src = "images/jesmin.jpg";
}