// Event Object : load, unload, scroll, resize, toggle.

window.addEventListener('load', function(){
    console.log("loading");
});

window.addEventListener('unload', function(){
    console.log("unload");
});

window.addEventListener('scroll', function(){
    console.log("Scrolling");
});

window.addEventListener('resize', function(e){
    console.log("Update size");
    console.log("Width :",e.target.outerWidth);
    console.log("Height :",e.target.outerHeight);
});


// Toggle works with details HTML element : toggle --> details
const details = document.querySelector("details");
details.addEventListener('toggle', function(e){
    // console.log('toggle');
    console.log(e.target.open); // gives true or false.
})