const textarea = document.querySelector('textarea');

textarea.addEventListener('keydown',function(e){
    console.log("Keydown");

    if(e.repeat){ // return true or false.
        alert("Don't repeat text.");
    }
});

textarea.addEventListener('keypress',function(){
    console.log("Keypress");
});

textarea.addEventListener('keyup',function(e){
    console.clear();

    console.log("Keyup");

    console.log(e);

    console.log(e.key); // return alphabetic value.

    console.log(e.keyCode); // return ASCII code.

    console.log(e.code); // which key is press, return like(keyN).

    console.log(e.shiftKey); // retur true or false.

    if (e.shiftKey){
        console.log("shift + "+e.key); // for seeing the output should be pressed the shift key.
    }
    
});