var name = ['Shilpa', 'Atique', 'Hasib', 'Rabbi'];
console.log(name);
console.log("name array length: ",name.length);

// shift() is opposite to pop()  ---> shift() is deleted element from the start.
name.shift();
console.log(name);
console.log("after the shift method, name array length: ",name.length);

// unshift() is opposite to push() ---> unshift() added element from the beggining
name.unshift("Lamia");
console.log(name);

// Adding element using by Splice() ---> splice(statring index, ending index, elements)
name.splice(1,0,"Rahim","Karim");
console.log(name);


// Removing element by using splice() --> splice(starting index, ending index)
name.splice(1,2);
console.log(name);

// slice() --> slice or given a portion of elements & return new array.It doesn't modify or changes original array. 
// slice(starting index , ending index) --> for show given a portion of array.
var newArray = name.slice(1,4);
console.log(newArray);
console.log(name);
// slice(index) --> delete from the 0 index to that index values. --> slice(0, index)
var array = name.slice(2);
console.log(array);

// Sort() --> sort the element following by Alphabates.It's only works at Alphabates.
var sortArray = name.sort();
name.reverse(); // reverse the elements according to Alphabates .
console.log(sortArray);

var numbers = [1, 20, 8, 5, 10];
numbers.sort(function(a,b){
    // return a-b; // Ascending to Descending sort.
    return b-a;  // Descending to Ascending sort --> Reverse sort
});
console.log(numbers);
