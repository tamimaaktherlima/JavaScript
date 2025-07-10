// setItem
// const user1 = sessionStorage.setItem("username1", "tamima");
// const user2 = sessionStorage.setItem("username2", "Lima");

// removeItem
// sessionStorage.removeItem("username")

// getItem
// const user1 = sessionStorage.getItem("username1");

// sessionStorage.setItem("username", "tamima");
// console.log(user1);
// console.log(sessionStorage);

// sessionStorage.removeItem("username1");
// sessionStorage.removeItem("username2");

// clear()
// sessionStorage.clear()

const user = {id : "101", name: "Lima"}; // list
sessionStorage.setItem("user", JSON.stringify(user)); // set

const userList = JSON.parse(sessionStorage.getItem("user"));
console.log(userList);
