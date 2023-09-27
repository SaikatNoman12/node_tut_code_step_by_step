const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/abdullah");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const ProductModel = mongoose.model('abdullahhh', ProductSchema);
    let data = new ProductModel({name:"Abdullah Al Nomaan", price:10000});
    let result = await data.save(); 
    console.log(result);
}
main();