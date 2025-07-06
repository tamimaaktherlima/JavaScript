// Constructor --> template
function Student(name, age, cgpa, department){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.department = department;

    // function inside Constructor
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.department);
    }
}

// creating Object.
var st1 = new Student("Tamima", 20, 3.96, "CSE");
var st2 = new Student("Lima", 22, 3.16, "SWE");

// printing
// console.log(st1.name);
// console.log(st2.name);

st1.display();
st2.display();