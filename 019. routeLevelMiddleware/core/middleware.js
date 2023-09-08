const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send('You do not provide your age!');
    }
    else if(req.query.age < 18){
        res.send('You ar under age');
    }
    else{
        next();
    }
}

module.exports = {
    middleWare:reqFilter,
}