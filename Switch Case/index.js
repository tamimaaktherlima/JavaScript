// Usually we can't access prompt() in this Node.js environment. So we should follow some steps so that we can use prompt() in VSCode terminal:
// 1. npm init
// 2. npm install prompt-sync
// 3. run the code in terminal to write node index (js file name) then press enter.

const prompt = require("prompt-sync")();

var digit = prompt("Enter the digit: ");
// console.log(digit);

switch (digit) {
    case "0":
        console.log("Zero\n");
        break;
    case "1":
        console.log("One\n");
        break;
    case "2":
        console.log("Two\n");
        break;
    case "3":
        console.log("Three\n");
        break;
    case "4":
        console.log("Four\n");
        break;
    case "5":
        console.log("Five\n");
        break;
    case "6":
        console.log("Six\n");
        break;
    case "7":
        console.log("Seven\n");
        break;
    case "8":
        console.log("Eight\n");
        break;
    case "9":
        console.log("Nine\n");
        break;

    default:
        console.log("Not a digit!\n");
        break;
}