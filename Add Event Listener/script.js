// document.querySelector("button").addEventListener("click", myFunction);

// function myFunction(){
//     alert("Security Alert");
// }

    // Using Anonymouse function 
// document.querySelector("button").addEventListener("click", function(){
//     alert("Security Alert");
// });

//  AddEventListener.
var myvar = document.querySelector("h1");
    // Click event
// myvar.addEventListener("click",function(){
//     myvar.classList.add("my-style");
// });

    // Mouseover-Mouseout event
myvar.addEventListener("mouseover",function(){
    myvar.classList.add("my-style"); // Mouseover -> when put the mouse on the text something (event) will happend
});
myvar.addEventListener("mouseout",function(){
    myvar.classList.remove("my-style"); //Mouseout -> when put the mouse on the text remove the (event).
});

