const promise = new Promise((resolve, reject) => {
    // Example logic for resolving or rejecting the promise
    const success = true;
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});
promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});