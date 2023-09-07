const express = require('express');
const path = require('path');

/**
 * REMOVE EXTENSION FORM URL
 * Apply get method.
 * Make 404 page.
 * Apply 404 page.
 * Interview question.
*/

const app = express();
const publicPath = path.join(__dirname, 'public');

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (_, res) =>{
    res.sendFile(`${publicPath}/about.html`);
});  

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/error.html`);
});

app.listen('5000');