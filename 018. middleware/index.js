/**
 * MIDDLEWARE
 * What is middleware?
 * How to make a middleware?
 * Apply middle ware on routes.
 * Types of middleware. 
*/

const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send('Please provide your age!');
    }
    else if(req.query.age < 18){
        res.send("You can't access this data!");
    }
    else{
        next();
    }
}

app.use(reqFilter);

app.get('', (req, res) => {
    res.send('Welcome home page');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.listen('5000');