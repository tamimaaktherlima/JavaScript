var num = 1;
var sum = 0;
// While loop
while(num <= 10){
    if(num % 2 == 0){
        document.write(" " + num );
        sum+=num;
    }
    num++;
}
document.write("</br>");

// document.write("The Sum is: "+ sum);
document.write("The Sum is: ",sum);
document.write("<h1>Ending...</h1>")

// do....while loop
var n = 1;
do{
    document.write("<h3>I Love Bangladesh!</h3>" + "</br>");
    n++;
}
while( n<= 5)
