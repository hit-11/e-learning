const express = require('express');
const request = require('request');
const yargs = require('yargs');

const port = 8888||process.env.port;
const ip = '172.16.96.246'; 
const app = express();

app.get('/',function (req, res) {
    res.send("welcome to the route section for e-learning app of jaypee noida :)");
});


//creating A dynamic route for mentor section
app.get('/:Mentor',function (req, res) {
    res.send(req.params.Mentor);
})



app.listen(port,ip,function (err) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("app is running on local ip");
    }
});
