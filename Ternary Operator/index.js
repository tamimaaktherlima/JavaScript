// Usually we can't access prompt() in this Node.js environment. So we should follow some steps so that we can use prompt() in VSCode terminal:
// 1. npm init
// 2. npm install prompt-sync
// 3. run the code in terminal to write node index (js file name) then press enter.



const prompt = require("prompt-sync")();
// var userName;
// userName = prompt("Please enter your name:");
// console.log("Hello, " + userName + "!");
var num = prompt("Enter the number : ");
// if (num > 0){
//     console.log("Positive\n");
// }
// else{
//     console.log("Negative\n");
// }


// Ternary Operator Syntex:
// condition ? expressionIfTrue : expressionIfFalse;

// num > 0 ? console.log("Positive") : console.log("Negative");
var result = num>0 ? "Positive" : num<0 ? "Negative" : "Zero";
console.log(result);