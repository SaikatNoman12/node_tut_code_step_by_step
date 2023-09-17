/** 
 * How to get mongodb data at node js
 * First type
 * Second and smart type
*/

const getMongoData = require('./mongodb');

// First get data at mongodb
getMongoData()
.then(response => {
    response.find({}).toArray()
    .then(res => {
        // console.log(res);
    });
});


// Second how to get mongodb data
const getData = async () => {
    let data = await getMongoData();
    data = await data.find().toArray().then(res => {
        console.log(res);
    })
} 
getData();
