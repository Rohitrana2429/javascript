let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched');
    }, 2000);
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
// Output will be:
// Data fetched (after 2 seconds)
