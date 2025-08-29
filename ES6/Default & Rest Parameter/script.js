// Default Parameter

// function message(){
//     console.log("Welcome");
// }
// message();

function message(text = "This is Default Parameter"){
    console.log(`${text}`);
}
message(); // take default parameter
message("I Love JS"); // take user define parameter.



// Rest parameter --> ...z

function printNumber(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
printNumber(10,20,30,40,50);