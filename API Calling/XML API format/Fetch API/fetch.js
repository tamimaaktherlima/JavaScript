// fetch() is a Method which replaced XMLHttpRequest
// fetch() -> global method for making HTTP request
// 2 ways to calling -> then, async await
// return a Promise by-default 

console.clear();
console.log(window);

// calling fetch(URL)
// GET method
fetch('https://jsonplaceholder.typicode.com/posts/1000') // get 100 data

then
.then((rs)=>{
    console.log(res); //return readablestrem
})

// POST method
fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST',
    body : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

// PUT method
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method : 'PUT',
    body : JSON.stringify({
        title: 'fooma',
        body: 'barma',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

// PATCH method
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method : 'PATCH',
    body : JSON.stringify({
        title: 'foomaNA',
        
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

// DELETE method
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method : 'DELETE',
})

// Filtering Data
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
// useable data
    .then((res)=>{
        // error handling
        if(!res.ok){
            const msg = `Error : ${res.status}`;
            throw new Error(msg);
        }
        return res.json();
    } )
    .then((res)=> console.log(res))

    .catch((err)=> console.log(err)); // error handling




// async await()
const makeRequest = async(url, configeration) => {
    const res = await fetch(url,configeration);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

const getData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts') 
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))

}

const sendData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',{ 
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) 
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))

}

const updateData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{ 
        method: 'PUT',
        body: JSON.stringify({
            title: 'fooma',
            body: 'barma',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) 
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))

}

const updateSingleData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{ 
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foomamamam',
            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) 
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))

}

const deleteData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{ 
        method: 'DELETE',
    }) 
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))

}

// getData();
sendData();
// updateData();
// updateSingleData()
deleteData();