const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const database = "abdullah";

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("friends");
}

module.exports = dbConnect;