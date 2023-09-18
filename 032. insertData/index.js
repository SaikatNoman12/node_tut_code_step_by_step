/** 
 * HOW TO INSERT DATA AT MONGO DB
 * Use insertOne()
 * Use insertMany()
*/

const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();
    /*    
    const insert = await db.insertOne({
        "name":"Nadia Sultana a",
        "collage":"FCI"
    });
    */

    const insertMany = await db.insertMany([
        {
            name:'Shimul Das',
            collage:"Feni"
        },
        {
            name:'Jamil Das',
            collage:"Reni"
        }
    ]);
 
    if(insertMany.acknowledged){
        console.log('Data inserted');
    }
}

insertData();

