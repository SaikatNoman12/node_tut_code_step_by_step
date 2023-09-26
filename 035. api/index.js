const express = require("express");
const getDb = require("./mongodb");
const mongodb = require('mongodb'); // this is use for get Mongodb ObjectId;
const app = express();

// get postman data
app.use(express.json());

// Get data at mongodb
app.get("/", async (req, res) => {
  let result = await getDb("abdullah");
  let data = await result.find({}).toArray();
  res.send(data);
});

// Post data at mongodb
app.post("/", async (req, res) => {
  let result = await getDb("abdullah");
  let data = req.body;
  let push = await result.insertOne(data);
  console.log(push);
  res.send(push);
});

// Put data at mongodb
app.put("/", async (req, res) => {
    let data = await getDb("abdullah");
    let result = await data.updateOne(
      { name: req.body.name },
      {
        $set: req.body
      }
    );
    res.send(result);
});  

// Use param and put (update) data at mongodb
app.put("/:parmData", async (req, res) => {
  let data = await getDb("abdullah");
  let result = await data.updateOne(
    { name: req.params.parmData },
    {
      $set: req.body
    }
  );
  res.send(result);
});

// Use param and delete data at mongodb
app.delete('/:id', async (req, res) => {
  let db = await getDb("abdullah");
  let result = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
  res.send(result);
});

app.listen(4300);
