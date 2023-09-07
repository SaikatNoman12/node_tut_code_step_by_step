/** 
 * EJS TEMPLATE ENGINE
 * What is template engine.
 * Install ejs template package.
 * Setup dynamic routing.
 * How to dynamic template use ejs.
 * Interview question.
*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (_, res) => {
    const user = {
        name:"Abdullah Al Nomaan",
        age:'40',
        mail:"abc@gmail.com"
    }

    res.render('profile', {user});
});

app.listen('5000');