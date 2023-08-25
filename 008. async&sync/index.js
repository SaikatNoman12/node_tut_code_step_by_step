/** 
 * ASYNCHRONOUS and SYNCHRONOUS
 * Synchronous type
 * Asynchronous type
*/
console.log('Synchronous execution start');

setTimeout(() => {

    console.log("Asynchronous execution");

}, 2000);

console.log('Synchronous execution end');