const mongoose = require('mongoose');
/*
mongoose.connect("mongodb://localhost:27017/e-learning",function (err) {
  if(err)
  {
    console.log(err);
  }
  else {
    console.log("database has been connected!");
  }
});*/


const UserSchema = new mongoose.Schema({
  username : {type: String, required: true},
  email: {type: String, required: true}
})

const user = mongoose.model('user',UserSchema);

module.exports = user;