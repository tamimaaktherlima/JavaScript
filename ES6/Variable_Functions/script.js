// ES6 --> ECMA Script 6 --> 2015

// Variable declaration 
// var x = 6;
// if(true){
//     x = 5;
// }
// console.log(x);


// ES6 variable
// let x = 6; // Let works into a scope or block.
// if(true){
//     let x = 5;
//     console.log(x); // print 5
// }
// console.log(x); // print 6

// const y = 10;
// if(true){
//     y = 15; // returns an Error. can't be changed.
// }
// console.log(y);


// Manual Printing.
// var x = 10;
// var y = 20;

// var sum = x+y;
// console.log("Sum is: " + sum);

// ES6 printing using (``) -> backtricks
// let x = 10;
// let y = 30;

// let sum = x+y;
// console.log(`Sum is: ${sum}`); // dynamic 
// console.log(`Sum is: ${x+y}`); // dynamic 


// Manual function 
// function add(x,y){
//     var sum = x+y;
//     console.log(sum);
// }

// add(20,40);

// ES6 function 
const add = (x,y)=>{
    let sum = x + y;
    console.log(`Sum is: ${sum}`);
}
add(10,50);