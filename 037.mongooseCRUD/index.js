const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/abdullah";
mongoose.connect(url);
const Schema = new mongoose.Schema({
    name:String,
    price:Number,
    cart:Number,
    brand:String
});

// Add data in mongodb database
const addInDb = async () => {
    let Product =  mongoose.model('products', Schema);
    let result = new Product({
        name:" One",
        price:10000,
        cart:2,
        brand:"Rols Royes"
    });
    let dbResult = await result.save();
    console.log(dbResult);
}
// addInDb();

// Update data in mongodb database
const updateInDb = async () =>{
    let dbUpdate = mongoose.model('products', Schema);
    let updateResult = await dbUpdate.updateOne(
        {name:"Watch One"},
        {
            $set:{
                price:2000
            }
        });
    console.log(updateResult);
}
// updateInDb();

// Delete data in mongodb database
const deleteDataInDb = async () => {
    let delData = mongoose.model('products', Schema);
    let delResult = await delData.deleteOne({
        price:1000
    });
    console.log(delResult);
}
// deleteDataInDb();

// Single or Multiple data find data in db
const findDbData = async () => {
    let findDb = mongoose.model('products', Schema);
    let result = await findDb.find({price:10000});
    console.log(result);
} 
findDbData();