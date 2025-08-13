// Focus Event:
// 1. onfocus
// 2. onfocusin
// 3. blur
// 4. focusout


const input = document.querySelector('input');

input.addEventListener('blur',function(e){
    // console.log("Blur");
    input.style.backgroundColor = "transparent"
    input.style.padding = "0rem"

    console.log(e.target.value);

    // when take away the curser from input field text will'be UpperCase.
    input.value = e.target.value.    toUpperCase();

// after printing value field will'be empty.
    input.value = "";
});

input.addEventListener('focus',function(e){
    // console.log("Focus");

    // console.log(e);

    input.style.backgroundColor = "orange"
    input.style.padding = "2rem"
});

input.addEventListener('focusin',function(){
    console.log("FocusIn");
});

input.addEventListener('focusout',function(){
    console.log("Focusout");
});