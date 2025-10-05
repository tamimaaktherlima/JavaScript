// ajax -> asynchronous javascript and xml

console.clear();
console.log(window)

const makeRequest = async(method,url,data) =>{
    try{
        const result = await $.ajax({
            url : url,
            method : method,
            data : data,    
        });
        return result;
    }catch(err){
        console.log(err);
    }
};

const getData = () =>{
    makeRequest("GET",'https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res.data))
    .catch((err)=>console.log(err))
};

const createData = () =>{
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts",{
        body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err)=>console.log(err))
};
// getData();
createData();
