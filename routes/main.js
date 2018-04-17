const express = require('express');
const app = express();
module.exports = function(app){
    app.get('/',function(req, res, next)
    {
        res.json("Ashishkr");
    })
};
/*const express = require('express');
const app = express();
module.exports = function(){
    app.get('/',function(req, res, next)
    {
        res.json("Ashishkr");
    }
)};*/
