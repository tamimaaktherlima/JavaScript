var count = 0;
document.addEventListener("keypress",function(event){
    count++;
    var text = event.key;

    document.querySelector("h1").innerHTML = "You have pressed "+text;
});
