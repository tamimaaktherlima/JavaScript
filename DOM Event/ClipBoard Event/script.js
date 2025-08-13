// ClipBoard event :
// 1. oncopy
// 2. onpaste
// 3. oncut

const input = document.querySelector('input');
const p = document.querySelector('p');


// console e show na koraye html element use kore show korbo.
input.addEventListener('copy', function(){
    // console.log("you have copied text");
    p.innerText = "you have copied text"
});

input.addEventListener('cut', function(){
    // console.log("you cut the text");
    p.innerText = "you have cut text"
});

input.addEventListener('paste', function(){
    // console.log("you paste the text");
    p.innerText = "you have pasted text"
});
