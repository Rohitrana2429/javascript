function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 2000);
}

fetchData(() => {
    console.log('Callback executed');
});
// Output will be:
// Data fetched (after 2 seconds)
// Callback executed
