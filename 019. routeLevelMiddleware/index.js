/** 
 * ROUTE LEVEL MIDDLEWARE
 * Route level middleware.
 * Apply middleware on single route.
 * Apply middleware in different file. 
 * Interview question.
*/

const express = require('express');
const app = express();
const middleWare = require('./core/middleware').middleWare;

const route = express.Router();
route.use(middleWare)

app.get('', (req, res) => {
    res.send('Welcome home page!');
});

// Apply middle ware in single route;
/* app.get('/about', middleWare, (req, res) => {
    res.send("Welcome about page!");
}); 
 */

route.get('/about',  (req, res) => {
    res.send("Welcome about page!");
});

route.get('/help', (req, res) => {
    res.send('Welcome help page');
});

app.use('/', route);

app.listen('4200');