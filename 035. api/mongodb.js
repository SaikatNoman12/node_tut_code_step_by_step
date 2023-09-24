const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dataBase = "abdullah";

async function getDb(collectionsD) {
  
  let result = await client.connect();
  let db = result.db(dataBase);

  return db.collection(collectionsD);

}

module.exports = getDb;
