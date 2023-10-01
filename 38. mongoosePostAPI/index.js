// POST API with mongoose
const express = require('express');
require('./config');
const Product = require('./product');
const app = express();
app.use(express.json());

// Post
app.post("/create", async (req, res) => {
    const upload = new Product(req.body);
    const upDone = await upload.save();
    res.send(upDone);
});

app.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data);
});

// Update
app.put("/update/:_id", async (req, res)=>{
    let result = await Product.updateOne(
        req.params,
        {
            $set:{...req.body}
        }
    );

    res.send(result);
});

// Delete
app.delete('/delete/:_id', async (req, res) => {
    let result = await Product.deleteOne(
        {...req.params}
    );
    res.send(result);
});


app.listen('4200');