// Get mysql.
const mysql = require('mysql');

// Mysql configuration.
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

// Check mysql connection.
con.connect(err => {
    if(err){
        console.log("error");
    }else{
        console.log("connected");
    }
});

// Get data in mysql.
con.query("select * from usersinfo", (err, result) =>{
    if(!err){
        console.log("result", result);
    }
});