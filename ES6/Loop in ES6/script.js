// for...of , for...in loop

// create an arrya
let names = ['Lima', 'Umama', 'Ashik', 'Rahim', 'Abbas']

// for...of loop
for(let name of names){
    // console.log(name);
}

// for...in loop --> mainly use in Objects
let student = {
    // key  : value
    name : 'Lima',
    id : 564,
    cgpa : 3.87,
    dept : 'CSE'
}

for(let x in student){
    // console.log(x); // return key
    // console.log(student[x]); // return value

    console.log(`${x} : ${student[x]}`); // return key:value
}