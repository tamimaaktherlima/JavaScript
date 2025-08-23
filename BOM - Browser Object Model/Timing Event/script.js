// BOM - Timing Events : setTimeOut(), setInterval()



    // setTimeOut()--> after a certain time doing somthing
// setTimeout(()=>{
//     console.log("Welcome");
// }, 2000);

// setTimeout(display,3000);
// function display(){
//     console.log("Hi Lima");
// };

const button = document.querySelector(".btn");
const message = document.querySelector(".message");

// button.addEventListener("click", saveUser);

// function saveUser(){
//     message.textContent = "Registration completed";

//     setTimeout(()=>{
//         message.textContent = "";
//     }, 3000);
// };


    // setInterval() --> after a centain time repeat the samething .
button.addEventListener("click", displayCount);

function displayCount(){
    let count = 1;
    message.textContent = count;

    setInterval(()=>{
        count++;
        message.textContent = count;
    }, 100);
}