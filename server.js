const express = require('express');
const mongoose = require('mongoose');

//mongoose.connect('mongodb://root:ashish@ds023644.mlab.com:23644/database-test',function (err) {
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/database-learn',function (err) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('database has been connected');
    }
});

const app = express();
const UserSchema = new mongoose.Schema(
    {
        name : String,
        age : Number
    }
);


const User = mongoose.model('User', UserSchema);


app.get('/create-user',function (req, res, next) {
    let user = new User();
    user.name = "AKG";
    user.age = 19;
    user.save(function(err)
    {
        if(err)
        {
            console.log(err);
            next(err);
        }
        else
        {

            res.json(user);
            //next();
        }

    })
  //  res.send(user);
});

app.listen(7896,function (err) {
    if(err)
    {
        console.log(err);
    }
    else
    console.log("app is running at 4040")
});