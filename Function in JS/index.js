//  creating function
function display(){ // Non-parameterized function
    document.write("My Name is Tamima Akther Lima" + "</br>")
}

// Parameterized function without return type
function square(num){
    var result = num * num;
    document.write("Square Value is: ",result + "</br>")
}

function displayValue(num1, num2){
    var result = num1 * num2;
    document.write("Value is: ", result + "</br>");
}

// Parameterized function with return type
function rectangle(height, width){
    var result = height * width;
    return result;
}
// calling function
display();
display();

square(10);
square(5);

displayValue(2,8);
displayValue(10,50);

var ans = rectangle(5,8);
document.write("Rectangle area is: ",ans + "</br>");
document.write("Rectangle area is: ",rectangle(6,7) + "</br>");