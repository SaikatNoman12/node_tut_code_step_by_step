/**
 * HOW DELETE DATA AT MONGO DB
 * Use deleteOne()
 * Use deleteMany()
*/

const dbConnect = require("./mongodb");

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany({name:""});

    console.log(result);

    if(result.acknowledged){
        console.log(result.deletedCount);
    }
}

deleteData();