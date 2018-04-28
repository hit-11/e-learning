const  express = require('express');
const app = express();
const fs = require('fs');
const data = require('../data');

module.exports = function(app){
    app.get('/',function(req, res, next)
    {
        res.json("Ashishkr");
    });

    app.get('/local',function(req, res, next)
    {
        res.render('main/home');
    })
    app.get('/about',(req,res,next)=>{
        var pageno = req.query.page;
        if(pageno === undefined || pageno> 3)
            pageno=0;
        res.render('main/about',{pageno: pageno, name:data.name , profile:data.profile , email:data.email  , imgsrc:data.img });
    })
    /*app.get('/contact',(req,res,next)=>{
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
