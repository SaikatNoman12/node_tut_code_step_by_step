/** 
 * Get database data;
*/

const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'abdullah';

async function getMongoData(){
    let result = await client.connect();
    let db = result.db(database);
    return  db.collection('friends');   
}

module.exports = getMongoData;