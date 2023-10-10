// Operating system module
const os = require("os");

console.log(os);

console.log(os.arch()); // get architecture

console.log(os.freemem() / (1024 * 1024 * 1024)); // get memory

console.log(os.totalmem()); // get total memory

console.log(os.hostname()); // get os hostname

console.log(os.userInfo()); // get os userinfo