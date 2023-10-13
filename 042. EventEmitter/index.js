const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count = 0;

event.on('CountAPI', () =>{
    count++
    console.log('API count>>>', count);
})

app.get('/', (req, res) => {
    res.send('API called.');
    event.emit("CountAPI");
});

app.get('/search', (req, res) => {
    res.send('Search API called.');
    event.emit("CountAPI");
});

app.get('/upload', (req, res) => {
    res.send('Upload API called.');
    event.emit("CountAPI");
});

app.listen('4200');