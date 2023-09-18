/** 
 * HOW TO UPDATE DATA AT MONGO DB
 * Use updateOne()
 * Use updateMany()
*/

const dbConnect = require('./mongodb');

const updateData = async () => {
    let db = await dbConnect();
    let data = await db.updateMany({name:"Nadia Sultana"}, {$set:{name:"Abdullah Al Khan"}});

    if(data.acknowledged){
        console.log('Data update');
    }
}

updateData();