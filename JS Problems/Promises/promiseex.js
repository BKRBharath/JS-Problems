const promise = new Promise((resolve, reject) => {
    setTimeout(() => {  
        const success = true;
        if (success) {
            resolve("Promise resolved successfully after 2 seconds!");
        } else {
            reject("Promise rejected after 2 seconds!");
        }
    }, 2000);
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});