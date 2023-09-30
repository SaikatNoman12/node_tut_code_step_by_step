const express = require('express');
require('./config');
const Product = require('./product');
const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
    const upload = new Product(req.body);
    const upDone = await upload.save();
    res.send(upDone);
});
app.listen('4200');