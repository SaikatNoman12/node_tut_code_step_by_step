/* 
const x = require('./two');
console.log(x.a); 
*/

/*
console.log([1,2,34,5,5].filter(item => item > 5)); 
*/

/* 
const http = require('http');
http.createServer((req, res) => {
    res.write('<h1>My name is Abdullah Al Nomman</h1>');
    res.write(JSON.stringify({
         'name':'hello'
    }));
    res.end();
}).listen(4200); 
*/


/* 
const colors = require('colors');
console.log('Abdulla'.bgRed);
*/

/* 
const http = require('http');
http.createServer((req, res) =>  {
    res.writeHead(200, {"content-type":"application\JSON"});
    const user = [
        {
        name:"Abdullah Al Noman", 
        age:20
        },
        {
        name:"Abul Kalam", 
        age:200
        },
        {
        name:"Mahir Khan", 
        age:20
        }
    ];
    res.write(JSON.stringify(user));
    res.end();
}).listen(4200); 
*/

/* 
const fs = require('fs');
fs.writeFileSync('hello.txt', "this is my first file"); 
*/

/* 
const fs = require('fs');
const input = process.argv;

fs.writeFileSync(input[2], input[3]);

if(input[2] == 'remove'){
    console.log('hello');
}

fs.unlinkSync(input[2])
console.log(input);
*/

/* 
const fs = require('fs');
const path = require('path').join(__dirname, 'newF');

for(let i = 0; i < 5; i++){
    fs.writeFileSync(`${path}/hello${i}.txt`, `This is ${i + 1}`);
}

fs.readdir(path, (err, res) => {
    res.forEach(item => {
        console.log(item);
    })
}) 
*/

/* 
const fs = require('fs');
const path = require('path').join(__dirname, 'newTwo'); 
*/
// Create File
/* for(let i = 1; i <= 5; i++){
    fs.writeFileSync(`${path}/new${i}.txt`, `This is new file ${i}`);
}
*/
// Read file
/* 
fs.readdir(path, (err, files) => {
    files.forEach(item => {
        console.log(item);
    });
});
*/
// Update file
/* 
fs.readdir(path, (err, res) => {
    res.forEach(item => {
        fs.appendFile(`${path}/${item}`, ' .Add New Text', (err) => {
            if(!err){
                console.log('Success');
            }
        });
    });
}); 
*/
// Read file data
/* 
fs.readdir(path, (err, files) => {
    files.forEach(item => {
        fs.readFile(`${path}/${item}`, 'utf8', (err ,res) => {
            console.log(res);
        })
    });
}); 
*/
// Rename file
/* 
fs.readdir(path, (err ,res) => {
    res.forEach(item => {
        fs.rename(`${path}/${item}`, `${path}/abc${item}`, (err) => {
            if(!err){
                console.log('success');
            }  
        });
    });
}); 
*/
// Delete file
/* 
fs.readdir(path, (err, files) => {
    files.forEach(item => {
        fs.unlinkSync(`${path}/${item}`);
    });
});
*/

// Asynchronous
/* 
setTimeout(() => {
    console.log('hello js');
}, 0);

console.log('hello'); 
*/

// Promise
/* 
const writeData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
});

writeData.then((d) => {
    console.log(d + 20);
});

console.log(100); 
*/

// Express
/* 
const express = require('express');
const path = require('path').join(__dirname, 'staticHtml');

const app = express(); 
*/

/* 
app.get('',(req, res) => {
    res.send('Hello this is home page.');
});

app.get('/about', (req, res) => {
    res.send('This is a about page');
}); 
*/

/* 
app.get('', (req, res) => {
    res.send(
        `
        <input type="text" value="${req.query.name}">
        `
    );
});

app.get('/about', (req, res) =>{
    res.send({
        name:"Noman",
        able:20
    });
}); 
*/

/* 
app.use(express.static(path));
*/

/* 
app.get('', (req, res)=>{
    res.sendFile(`${path}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${path}/about.html`);
});
*/

/* 
app.get('*', (req, res) => {
    res.sendFile(`${path}/error.html`);
});

app.listen('4200'); 
*/

/* 
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    const user = {
        name:'Abdullah Al Nomaan',
        age:20,
        mail:'abc@gmail.com',
        friend:[
            'Noman',
            'Hasnat',
            "Mahir",
            "Shamim"
        ]
    }
    res.render('index', {user});
});

app.listen('4200'); 
*/

/* 
const express = require('express');
const app = express();

const middleware = (req, res, next) => {
    if(!req.query.age){
        res.send('Please provide your age!');
    }
    else if(req.query.age < 18){
        res.send('You are under 18. Sorry I provide data 18+ Children!');
    }
    else{
        next();
    }
}

app.use(middleware);

app.get('', (req, res) => {
    res.send('This is home page')
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.listen('4200'); 
*/

const express = require('express');
const middleware = require('./core/middleware').middleware;
const app = express();

/* 
app.get('', (req, res) => {
    res.send('This is home page');
});

app.get('/about', middleware,(req, res) =>{
    res.send('This is about age');
});

app.listen('4200'); 
*/

const route = express.Router();
route.use(middleware)

app.get('/', (req, res) => {
    res.send('This is home page');
});

route.get('/about', (req, res) => {
    res.send('This is about page ha hah hahah ');
});

app.use('/', route); 
app.listen('4200');