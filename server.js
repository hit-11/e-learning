const express = require('express');
const morgan = require('morgan');
//const helmet = require('helmet');
const mongoose = require('mongoose');
const ejs = require('ejs');
const engine = require('ejs-mate');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const passportFacebook = require('passport-facebook');


const secret = require('./config/secret');



mongoose.connect(secret.db,function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("database has been connected!");
    }
})


const app = express();

app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs');
app.engine('ejs',engine);

app.set('views',__dirname+'/views')

//app.use(helmet());
app.use(morgan('dev'));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(passport.initialize());
app.use(passport.session());


app.use(cookieParser());


//require('./routes/main')(app);
require('./routes/main')(app);


app.listen(secret.port,function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("app is running on port 4040");
    }
});