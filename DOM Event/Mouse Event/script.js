// Mouse Event doesn't work with -> <html>, <head>, <meta>, <title>, <br>, <script> etc.

    // Events : (according to working serial)
// 1. onmouseover
// 2. onmouseenter
// 3. onmousemove
// 4. onmousedown  
// 5. onmouseup
// 6. onclick 
// 7. ondblclick -> double click
// 8. onmouseleave

console.clear();

const div = document.querySelector("div");


div.addEventListener('click', function(e){
     console.log("click event is occured");

     console.log(e);

     console.log(e.target); //return target element.

     console.log(e.target.id); // return id name

     console.log(e.target.className); // return class name.

     console.log(e.target.innerHTML); // return html emelent.

     console.log(e.target.textContent); // return text.

     console.log(e.target.innerText); // return text.
})

div.addEventListener('dblclick', function(){
    console.log("dblclick (double click) event is occured");
})

div.addEventListener('mouseup', function(){
    console.log("mouseup event is occured");
})

div.addEventListener('mousedown', function(){
    console.log("mousedown event is occured");
})

div.addEventListener('mouseenter', function(){
    console.log("mouseenter event is occured");
})

div.addEventListener('mouseleave', function(){
    console.log("mouseleave event is occured");
})

div.addEventListener('mouseover', function(){
    console.log("mouseover event is occured");
})

div.addEventListener('mousemove', function(e){
    // console.log("mousemove event is occured");
    console.log("clientX :", e.clientX + " clientY :",e.clientY); // give compare with the windows

    console.log("offsetX :", e.offsetX + " offsetY :",e.offsetY); // give compare with the div elements
})


// how to use click event in multiple buttons using map().

const buttons = document.querySelectorAll('.btn');

// console.log(buttons); // give NodeList

// convert NodeList to Array and mapping 
Array.from(buttons).map((button) =>{
    button.addEventListener('click',function(e){
        // console.log(e.target.innerText);
        console.log(e.target.textContent);
    });
});