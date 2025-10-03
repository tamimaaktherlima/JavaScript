// axios (configuration)
// axios (url, configuration)
// axios returns response object - data, status, statusText, headers, configuration

console.clear();
// console.log(window.axi);

// Get resource
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=>console.log(res.data))
// .catch((err)=> console.log(err))


// Creating resource
// axios.post('https://jsonplaceholder.typicode.com/posts',{   
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
// })
// .then((res)=>console.log(res.data))
// .catch((err)=> console.log(err))


// Update resource
// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
//     body: JSON.stringify({
//         title: 'LimArif',
//         body: 'lima'
//     }),
// })
// .then((res)=>console.log(res.data))
// .catch((err)=> console.log(err))


// Update a Single resource
// axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
//     body: JSON.stringify({
//         title: 'mere ashiqui',
//     }),
// })
// .then((res)=>console.log(res.data))
// .catch((err)=> console.log(err))


// Delete resource
// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=>console.log(res.data))
// .catch((err)=> console.log(err))


// make more easier to use
const makeRequest = async(config) =>{
    return await axios(config);
} 

const getData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then ((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
};

const createData=()=>{
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
    })
    .then ((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
};

const updateData=()=>{
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method: "put",
        data: JSON.stringify({
            id : 1,
            title: "foommmmmmmmmaaaaaa",
            body: "barmmmmmmaaaaa",
            userId: 1,
        }),
    })
    .then ((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
};

const updateSingleData=()=>{
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method: "patch",
        data: JSON.stringify({
            title: "foommmmaaaaa",
        }),
    })
    .then ((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
};

const deleteData=()=>{
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/1",
        method: "delete",
    })
    .then ((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
};
// getData();
// createData();
// updateData();
// updateSingleData();
deleteData()