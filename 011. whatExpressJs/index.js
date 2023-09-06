/** 
 * NODE JS REQUEST AND RESPONSE
 * Create pages.
*/

const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('This is my home page');
});

app.get('/about', (req, res) => {
    res.send('This is my about page.');
});

app.get('/help', (req, res) => {
    res.send('How can i help you?');
})

app.listen('5000');