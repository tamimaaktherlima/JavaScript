console.clear();

console.log(window)
const makeRequest = async(url,method) =>{
    const result = await $.ajax({
        url : url,
        method : method,
    });
    return result;
};

const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","GET").then(
        (res)=>console.log(res)
    );
};
getData();
