// Event Propagation : 2 types
// 1. Bubbing (Inner First calling)
// 2. Capturing (Outter first calling)


const outter = document.getElementById('outter');
const inner = document.getElementById('inner');

// bubbling Propagation -- > by Default ( inner Div called 1st -> then Outter will'be calld )
// outter.addEventListener('click', function(){
//     console.log("Outter is called");
// }, false);

// inner.addEventListener('click', function(){
//     console.log("inner is called");
// }, false);


//  capturing Propagation -->(Outter will'be 1st calling then inner)
outter.addEventListener('click', function(){
    console.log("Outter is called");
},true);

inner.addEventListener('click', function(){
    console.log("inner is called");
}, false);