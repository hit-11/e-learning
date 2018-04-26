const  express = require('express');
const app = express();
module.exports = function(app){
    app.get('/',function(req, res, next)
    {
        res.json("Ashishkr");
    });

    app.get('/local',function(req, res, next)
    {
        res.render('main/home');
    })
    /*app.get('/about',(req,res,next)=>{
        res.render('main/about');
    })
    app.get('/contact',(req,res,next)=>{
        res.render('main/contact');
    })*/
};
/*const express = require('express');
const app = express();
module.exports = function(){
    app.get('/',function(req, res, next)
    {
        res.json("Ashishkr");
    }
)};*/
