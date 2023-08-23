
let a = [1,2,3,4]; 

module.exports = {
    x:20,
    y:30,
    z: function(){
        return this.x + this.y;
    },
    s: a
};
