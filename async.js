async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });

    let result = await promise;
    console.log(result);
}

fetchData();
// Output will be:
// Data fetched (after 2 seconds)
