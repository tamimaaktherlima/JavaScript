for(var i=0;i<3;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        var myVar = document.querySelector("h1");
        myVar.innerHTML ="You have successfully Clicked the "+text;

        myVar.classList.add("my-style");

    });
}
    // Manually 
// document.querySelectorAll(".myButton")[1].addEventListener("click",function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";

// });
// document.querySelectorAll(".myButton")[2].addEventListener("click",function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";

// });