/** 
 * CONNECT NODE WITH MONGODB
 * Install mongodb package.
 * Connect mongodb with nodejs.
 * Show data form mongodb.
*/

// const MongoClient = require('mongodb').MongoClient;
// or
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

let database = 'abdullah';

async function getData(){
    let request = await client.connect();
    let db = request.db(database);
    let collection = db.collection('friends');
    let response = await collection.find({}).toArray();
    console.log(response[0]);
}
getData();