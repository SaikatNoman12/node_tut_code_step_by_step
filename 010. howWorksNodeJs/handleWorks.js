/** 
 * How to works node js.
 * Call stack.
 * Node js API.
 * Call back queue.
*/
console.log('Our process is start.');

setTimeout(() => {
    console.log('This is initialize time 2 second.');
}, 2000)

setTimeout(() => {
    console.log('This is initialize time 0 second.');
})

console.log('Our process is finished.');