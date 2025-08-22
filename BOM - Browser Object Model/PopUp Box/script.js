// popup boxes - alert(), confirm(), prompt().


// alert()
alert("Error!");


// confirm()
confirm("Are you sure?");

function deleted(){
    let value = confirm("Are you sure?"); // return true or false.

    if(value){
        console.log("Image Deleted");
    }else{
        console.log("Not deleted");
    }
}

deleted();


// prompt()
prompt("Enter your name: ");
 
function welcome(){
    var h1 = document.createElement("h1");
    var text;

    var name = prompt("Ente your name: ");

    if(name == null || name == ''){
        text = "no name found"
    }else{
        text = "Welcome "+name;
        // console.log(name);
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcome();