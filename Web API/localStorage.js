// localStorage --> is a Web Storage API in JavaScript that allows you to store data in the user's browser permanently — until it is explicitly(fully) cleared by the user or the browser.
// localStorage store data as a key pair values as string.

// setItem(key, values)
// var userName = localStorage.setItem("username", "Tamima Akther Lima");
// var userPass = localStorage.setItem("password", "0123456789");

// getItem(key)
// console.log(localStorage.getItem("username"));
// console.log(localStorage.getItem("password"));

// updated localStorage values.
// var userName = localStorage.setItem("username", "Habibur Basar");

// remove localStorage --> removeItem(key).
// localStorage.removeItem("username");
// localStorage.removeItem("password");

// setItem(key , value).
const countries = ["Bangladesh", "Canada", "Nepal", "America"]; // Array
// set an array to localStorage --> useing JSON.stringify(convert array to String store)
localStorage.setItem("countries", JSON.stringify(countries)); 
const userName = localStorage.setItem("username", "Tamima Akther Lima");

// get or read values.
const coutriesList = JSON.parse(localStorage.getItem("countries"));
// console.log(coutriesList);

// console.log(localStorage);
localStorage.clear(); // clear all