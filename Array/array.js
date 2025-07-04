// Manually declare the Array and initialize the values
// var array = [10 , 20 , 30 , 40 , 50];

//  Taking input from User
var array = new Array();
// console.log(object);
for(var i = 0; i< array.length; i++){
    array[i] = parseInt(prompt("Enter the values: "));
}
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
var sum = 0;

for(var i = 0 ; i < array.length; i++){
    console.log(array[i]);
    sum += array[i];
}
console.log("Sum is:",sum);