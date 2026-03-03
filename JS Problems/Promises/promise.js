const mypromise = new Promise((res,rej)=>{
    document.getElementById("btn").addEventListener("click",()=>{
        res("promiseresolved");
    });
});


mypromise.then((data)=>{
    console.log(data);
});