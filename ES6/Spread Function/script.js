// Spread Function in JS --> ...spread

// function add(x,y,z){
//     // console.log(object);
//     return x+y+z;
// }

// add(1,2,3);
// console.log(add(1,2,3));
// let numbers = [1,2,3];
// // console.log(add(...numbers)); // return 6

// let num1 = [5,6,...numbers];
// // console.log(num1);

// let num2 = [5,...numbers,6];
// // console.log(num2);

// let num3 = [...numbers,5,6];
// console.log(num3);


// Concate two array numbers.

// let num1 = [1,2,3];
// let num2 = [4,5,6];
// // let nums = num1.concat(num2); // using concate functions
// let nums = [...num1,...num2]; // using spread operations
// console.log(nums);


// Spread in Object.
let p1 ={
    name : "Lima",
    age : 24,
    
};

let p2 = {
    dept : "CSE",
    faculty : "FSIT"
};

let p = {...p1, ...p2};
console.log(p);  // return : { name: 'Lima', age: 24, dept: 'CSE', faculty: 'FSIT' }