const middleware = (req, res, next) =>{
    if(!req.query.age){
        res.send('Please provide your age');
    }
    else if(req.query.age < 18){
        res.send('You are under 18!');
    }
    else{
        next();
    }
}

module.exports = {
    middleware:middleware
}