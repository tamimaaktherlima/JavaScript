// API -> Sent request to Server 
// 4 ways to call API -> XMLHttpRequest, Fetch, Axios,Jquery

console.clear();

// event -> onload(), onerror()
// property -> response, responeText, responseType, responseURL,status, statusText
// function -> open(), send(), setRequestHeader()


// console.log(window);
// console.log(window.XMLHttpRequest);

// Method
const makeRequest = (method, url,  data) =>{
    // to use XML
    // const xhr = new XMLHttpRequest();

    // // open the link ->(method, URL)
    // xhr.open(method, url);

    // // Set the send request
    // xhr.setRequestHeader('Content-Type', 'application/json');

    // // process the URL
    // xhr.onload = () =>{
    //     let data = xhr.response;
    //     // console.log(data); // JSON formate
    //     console.log(xhr.status); // status code
    //     console.log(xhr.statusText);
    //     // console.log("Send Data");
    //     console.log(JSON.parse(data)); // JS formate
    // }

    // // error handling
    // xhr.onerror = () =>{
    //     console.log("error is here");
    // }

    // // send the url
    // xhr.send(JSON.stringify(data));

    return new Promise ((resolve, reject) =>{
        const xhr = new XMLHttpRequest();

        // open the link ->(method, URL)
        xhr.open(method, url);

        // Set the send request
        xhr.setRequestHeader('Content-Type', 'application/json');

        // process the URL
        xhr.onload = () =>{
            let data = xhr.response;
            // console.log(data); // JSON formate
            console.log(xhr.status); // status code
            console.log(xhr.statusText);
            // console.log("Send Data");
            console.log(JSON.parse(data)); // JS formate
        }

        // error handling
        xhr.onerror = () =>{
            console.log("error is here");
        }

        // send the url
        xhr.send(JSON.stringify(data));
    })
}


// GET method
const getData = ()=>{
    // console.log("Hello");

    // // to use XML
    // const xhr = new XMLHttpRequest();

    // // open the link ->(method, URL)
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    // // process the URL
    // xhr.onload = () =>{
    //     let data = xhr.response;
    //     // console.log(data); // JSON formate
    //     console.log(JSON.parse(data)); // JS formate
    // }

    // // error handling
    // xhr.onerror = () =>{
    //     console.log("error is here");
    // }

    // // send the url
    // xhr.send();

    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
    // makeRequest('GET', 'https://jsonplaceholder.typicode.com/photos')
}

// POST method
const sendData =()=>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,  
    });
}

// PUT method -> update full info
const updateData =()=>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'fooMa',
        body: 'barMa',
        userId: 1,    
    });
}

// PATCH method -> update e Single info
const updateSingleData =()=>{
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        
        title: 'Changed',
           
    });
}

// DELETE method
const deleteData =()=>{
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
}

getData();
// sendData();
// updateData();
// updateSingleData();
// deleteData();