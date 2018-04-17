const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;
const user = require('./models/users');
//serialize the user in this middleware
passport.serializeUser(function (user, done) {
  done(null, user.id);
});


//deserialize the middleware in this middleware
passport.deserializeUser(function(id, done) {
  user.findById(id, function(err, user) {
    done(err, user);
  });
});


passport.use(new PassportLocal(function (username, password, done) {
  user.findOne({
    username: username
  },function (err, user) {
    if(err)
    {
      return done(err);
    }
  if(!user)
  {
    return done(null, false);
  }
  if(user.password != password)
  {
    return done(null, false);
  }
  return done(user);
})}));









