// Select HTML elements Using DOM in JS


// getElementById
// document.getElementById("heading").innerHTML = "Hello DOM (Document Object Model)"
var myheading = document.getElementById("heading1");
myheading.innerHTML = "Hello JS";

var myheading1 = document.getElementById("heading2");
myheading1.innerHTML = "Document Object Model (DOM)";

// getElementsByClassName
document.getElementsByClassName("para")[0].innerHTML = "Myself Tamima Akther Lima study in CSE in Daffodil International University";

// getElementsByTagName
document.getElementsByTagName("h1")[0].innerHTML = "hi"
document.getElementsByTagName("h1")[1].innerHTML = "hi"