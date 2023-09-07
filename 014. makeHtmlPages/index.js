/** 
 * MAKE HTML PAGES
 * make folder for HTML file and access it.
 * Make html files.
 * Load html files.
*/

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.listen('5000');

