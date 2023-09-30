const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    name:String,
    price:Number,
    cart:Number
});

module.exports = mongoose.model('products', Schema);