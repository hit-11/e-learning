const express = require('express');
const request = require('request');
const yargs = require('yargs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ejs = require('ejs');
const engine = require('ejs-mate');


const port = 8888||process.env.port;
//const ip = ' 100.113.58.166';
//const ip = '172.16.96.246';
const app = express();

app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('views', __dirname + '/views');



app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect('mongodb://localhost:27017/e-learning',function (err) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('database has been connected!');
    }
});



const userSchema = new  mongoose.Schema(
    {
        name: String,
        batch: String
    }
);


const User  = mongoose.model('User',userSchema);


app.get('/create-student',function (req, res, next) {
    let user =  new User();
    user.name = "Ashishkr";
    user.batch = "B2";
    user.save(function (err) {
        if(err)
        {
            console.log(err);
            next(err);
        }
        else
        {
            res.json(user);
        }
    })
});


app.post('/create-mentor',function (req, res, next) {
   const user = new User();
   user.name = req.body.name;
   user.batch = req.body.batch;
   user.save(function (err) {
       if(err)
       {
           console.log(err);
           next(err);
       }
       else
       {
           res.json(user);
       }
   })
});


app.get('/:course-name',function (req, res, next) {
   let course = new User();
   const name_of_course = req.params.name;

   course.save(function (err) {
       if(err)
       {
           console.log(err);
           next(err);
       }
       else
       {
           console.log(name_of_course);
           res.json(name_of_course);
       }
   })
});



app.get('/',function (req, res) {
    res.render('index');
    //res.send("welcome to the route section for e-learning app of jaypee noida :)");
});


//creating A dynamic route for mentor section
app.get('/:Mentor',function (req, res) {
    res.send(req.params.Mentor);
});



app.listen(port,function (err) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("app is running on local ip");
    }
});
