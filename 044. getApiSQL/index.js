const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json());

// Get data
app.get("/", (req, res) => {
    con.query("SELECT * FROM users", (err, result) =>{
        if(!err){
            console.log(result);
            res.send(result);
        }
    });
});

// Post static data
app.post("/", (req, res) => {
    const data = {user:"amin", password:"2030", user_type:"admin", name:"khan"};
    con.query("INSERT INTO users SET ?", data, (error, result, fields) =>{
        if(error) {
         console.log(error)
        }
        else {
         res.send(result)
        }
    });
});

// Post dynamic data
app.post("/update", (req, res) => {
    const data = req.body;
    con.query("INSERT INTO usersecond SET ?", data, (error, result, fields) => {
        if(error) console.log(error)
        else res.send(result);
    });
});

// Update data
app.put("/dataUp", (req, res) => {
    let data = ["Rabbil", "2020", "md", "md addon", 1]
    con.query("UPDATE usersecond SET user = ?, password = ?, user_type = ?, name = ? where id = ?", data, (error, result, fields) => {
        if(error) console.log(error);

        res.send(result);
    });
});

// Update data dynamically
app.put("/dataUp/:id", (req, res) => {
    const data = [req.body.user, req.body.password, req.body.user_type, req.body.name, req.params.id];
    con.query("UPDATE usersecond SET user = ?, password = ?, user_type = ?, name = ? where id = ?", data, (error, result, fields) => {
        if(error) console.log(error);
        res.send(result);
    });
});

// Delete data dynamically
app.delete("/delete/:id", (req, res) => {
    con.query(`DELETE FROM usersecond where id = ${req.params.id}`, (error, result, fields) => {
        if(error) console.log(error);
        res.send(result);
    });
});

app.listen("4200");