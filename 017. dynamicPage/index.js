/** 
 * DYNAMIC PAGE
 * How to make loop in ejs.
 * Make header file.
 * Show common header file.
 * Interview question.
*/
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/login', (_, res) => {
    res.render('login');
});

app.get('/help', (_, res) => {

    const user = ['Noman', 'Abdullah', 'Hasnat'];

    res.render('help', {user});
});

app.listen('5000');