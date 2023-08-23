
// global module
console.log('hello javaScript');
console.log('>>>>>= ' + __dirname);
console.log('>>>>>= ' + __filename);

// non-global module
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello Bangladesh');
const ngs = require('fs').writeFileSync;
ngs('hello2.txt', 'Hello My Dear Friend');

