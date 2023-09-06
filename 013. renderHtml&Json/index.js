/**
 * RENDER HTML AND JSON
 * How html tags.
 * Show json data.
 * Link pages.
 * Get query params. 
*/

const express = require('express');
const app = express();

app.get((''), (req, res) => {
    res.send(`
        <h1>Hello this is my home page</h1>
        </br>
        <a href="/about">Go about</a>
    `);
});

app.get('/about', (req, res) => {

    res.send(`
    <input type='text' placeholder='Enter your text' value='${req.query.name}'>
    </br>
    <a href="/">Go home</a>
    `)
});

app.listen('5000');

