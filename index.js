// const prompt = require("prompt-sync")();
var numOfwin = 0;
var numOflost = 0;
for(var i=1; i<=10; i++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 10 : "));
    // console.log(guessNumber)
    var randomNumber = Math.floor(Math.random() * 9) + 1;  // take random value
    if(guessNumber == randomNumber){
        console.log("You won the game.");
        numOfwin++;
    }
    else{
        console.log("You lost the game. Random number is - ",randomNumber);
        numOflost++;
    }
}

document.write("Total win the game: ",numOfwin + "</br>");
document.write("Total lost the game: ",numOflost + "</br>");