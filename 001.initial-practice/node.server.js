const http = require('http');

http.createServer((req,res) => {
    res.write('<h1>My name is abdullah al nomaan. This is my first server</h1>');
    res.end();
}).listen(4500);
