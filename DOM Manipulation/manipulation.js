var link = document.getElementsByTagName("a")[0];
// console.log(link);
link.innerHTML = "Go";
link.style.textDecoration = "none";
link.style.color = "red";
link.style.fontSize = "2.5rem";
link.href = "https//limaswebsite.com";
// console.log(link.href);

var heading1 = document.getElementsByTagName("h1")[0];
heading1.innerHTML = "Say Hello";

var heading2 = document.getElementsByTagName("h1")[1];

// creating HTML elements.
var heading3 = document.createElement("h1"); // create an element.
var text = document.createTextNode("This is Heading 3."); // create a text
heading3.appendChild(text); // append text into the creating element.

var myDiv = document.getElementById("my-div"); // find div id.
myDiv.appendChild(heading3); // and append the creating new HTML element into that div section.

var heading4 = document.createElement("h1");
var text1 = document.createTextNode("Heading 4");
heading4.appendChild(text1); // add the element into the last.

myDiv.insertBefore(heading4,heading1); // add the element before any other element.


// remove elements.
myDiv.removeChild(heading2);


// Checking classList into the console section

// document.getElementById("my-div").classList; // show only exist class.
// document.getElementById("my-div").classList.add("my-class2"); // add class section
// document.getElementById("my-div").classList; // show all classes.
