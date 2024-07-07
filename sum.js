//write a code for sum of number in javascirpt
// this is method 1 simple calling function 
let n = 100;

function sum(n) {
  if (n <= 0) { // Base case to stop the recursion
    return 0;
  } else {
    return sum(n - 1) + n; // Recursive case
  }
}

console.log(sum(n)); // Call the function and log the result



 // this is method two it is callbackfunction which we use 

function sum(n, callback) {
  if (n <= 0) {
    callback(0);
  } else {
    sum(n - 1, function(result) {
      callback(result + n);
    });
  }
}

// Define the initial value of n
let n = 100;

// Call the sum function and pass a callback to handle the result
sum(n, function(result) {
  console.log(result); // This will print 5050
});
