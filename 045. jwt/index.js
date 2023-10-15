const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "secretKey";

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        result:"api is working"
    });
});


// For generate jwt token.
app.post("/login", (req, res) => {
    const user = {
        id:1,
        user:"muhammd",
        email:"muhammd@gmail.com"
    }
    jwt.sign({user}, secretKey, {expiresIn:"300s"}, (err, token) => {
        res.json(token);
    });
});

// middleware
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authentication'];
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }else{
        res.send("Token is invalid.");
    }
}

// verify security key
app.post("/profile", verifyToken,(req, res) => {
    jwt.verify(req.token, secretKey, (err, auth) => {
        if(err){
            res.send("Token is invalid");
        }
        else{
            res.json({
                msg:"Profile Accessed",
                auth
            })
        }
    });
}); 


app.listen("4200");