const form = document.querySelector('form');

const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const pass = form.querySelector("div #password");

form.addEventListener('submit',formHandler);

function formHandler(e){
    e.preventDefault();  // the default action that belongs to the event will not occur.
    
    // console.log("Submit");
    // console.log(name.value);
    // console.log(email.value);
    // console.log(pass.value);

    // passing value from backend
    const userInfo = {
        name : name.value,
        email : email.value,
        password : pass.value
    };
    console.log(userInfo);

    //  after printing input field will empty.
    name.value = "";
    email.value = "";
    pass.value = "";
}
