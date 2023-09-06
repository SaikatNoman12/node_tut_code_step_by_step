/** 
 * NODE JS REQUEST AND RESPONSE
 * Create pages.
*/

const express = require('express');

const app = express();

app.get('', (req, res)  => {
    res.send('This is my awesome home page.');
})

app.get('/product/details', (req, res) => {
    console.log(req.query.name);

    res.send('Your product name is: ' + req.query.name);
});

app.listen('5000');