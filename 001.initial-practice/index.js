console.log('hello javascript');

let x = 100
let y = 200;
let z = 300

console.log(x + y + z);


const app = require("./app");

console.log(app.z());
console.log(app.s);

for(let i = 10; 1 <= i; i--){
    console.log(`10 x ${i} = ` + i * 10);
}