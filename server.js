const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

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

app.use(helmet());
app.use(morgan('dev'));

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
})