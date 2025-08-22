// BOM - Browser Object Model
// windows object
// location --> herf, protocol, host, hostname, port, pathname.


// console.log(window);

console.log(window.location);

// herf
// console.log(location.href);

// // protocol
// console.log(location.protocol);

// // host
// console.log(location.host);
// // hostname
// console.log(location.hostname);
// // port
// console.log(location.port);

// // pathname
// console.log(window.location.pathname);


const locationDiv = document.querySelector(".location-div");
console.log(locationDiv);

const p1 = locationDiv.children[0];
// console.log(p1);
p1.textContent = location.href;  // return: http://127.0.0.1:5500/Location%20Object/index.html 
// [full link]

const p2 = locationDiv.children[1];
// console.log(p1);
p2.textContent = location.host; // return: 127.0.0.1:5500

const p3 = locationDiv.children[2];
// console.log(p1);
p3.textContent = location.hostname;  // return: 127.0.0.1

const p4 = locationDiv.children[3];
// console.log(p1);
p4.textContent = location.port;  // return: 5500

const p5 = locationDiv.children[4];
// console.log(p1);
p5.textContent = location.protocol;  // return: http:

const p6 = locationDiv.children[5];
p6.textContent = location.pathname;  // retrun: /Location%20Object/index.html


const visitButton = document.getElementById("visti-btn");

// go to another website while clicking the button.
//  redirect another link.
visitButton.addEventListener("click", function(){
    location.assign("https://github.com/tamimaaktherlima");
});