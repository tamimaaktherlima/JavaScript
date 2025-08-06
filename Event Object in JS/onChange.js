    //  On Change Event --> 
    // input 
const input = document.querySelector("input[name=username]");
// console.log(input);

input.addEventListener("change",changeHandler);

function changeHandler(e){
    // console.log("changed");
    // console.log(e);
    // console.log(e.type); // which type of event here happened.
    // console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.value); // input er value access

}

//  CheckedBox
const programs = document.querySelectorAll("input[name=program]");
console.log(programs); // gives a NodeList

// COnvert A NodeList to an Array
Array.from(programs).map((program)=>{
    program.addEventListener("change", programHandler); // add listener on mapping each arrayIndex.
})

function programHandler(e){
    // console.log("checked"); // it gives all times checked.

    // if we want only when we checked the checkBox it will'be showned.

    // e.target.checked -> gives true / false.
    if(e.target.checked){
        // console.log("checked");
        console.log(e.target.value);
    }
    // else{
    //     // console.log("Unchecked");
    // }
}

// Password
var myPass = document.getElementById("myPassword");
// it's more than better for using.
myPass.addEventListener("change", function(e){
    // console.log("Password changed (on blur) :", this.value); // using OnChange event without passing e
    console.log("Password changed: ", e.target.value); // using OnChange event when passing e as a parameter.
});
// myPass.addEventListener("input", function(){
//     console.log("Password changed (on-blur) :", this.value); // using Input event
// });

// Radio  --> 
// for single radio button.

// const radio1 = document.getElementById("html");
// radio1.addEventListener("change", function(e){
//     console.log("Radio 1 changed!");
//     console.log(e.target.value);
// })

    // for all the radio button (using loop)
const myRadio = document.querySelectorAll("input[name=radioGroup]");
myRadio.forEach(radio=>{
    radio.addEventListener("change",function(e){
        console.log(`Radio "${e.target.value}" changed. Checked: ${e.target.checked}`);
    })
})

//  Search
// const mySearch = document.getElementById('search');
const mySearch = document.querySelector('input[name=search]');
mySearch.addEventListener('change',function(e){
    // const text = mySearch.value;
    // console.log(text);
    console.log('Search value change to :',e.target.value);
})

    // Select
const dept = document.querySelector("#department"); // id select
// console.log(dept);
dept.addEventListener('change',handleDept);

function handleDept(e){
    console.log('selected :', e.target.value);
}