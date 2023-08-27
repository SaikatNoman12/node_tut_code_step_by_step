/** 
 * Handle Asynchronous data
 * Create 2 variables. a & b
 * Create Promises and resolve new data.
 * Get Promise data and this data store in variable b. Then add a & b.
*/
let a = 20;
let b = 10;

const waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 1000);
});

waitingData.then((data) => {
    b = data;

    console.log(a + b);
}) 
