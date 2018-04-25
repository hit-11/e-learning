const passport = require('passport');
const passportConfig = require('../config/passport');
const user = require('../models/users');
module.exports = function (app) {

  app.get('/login', function (req, res, next) {
    res.render('./accounts/login');
  })

  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }/*,

    function(req, res)
    {
      res.redirect('/profile');
    }*/
  ));

  app.get('/signup',(req,res,next)=>{
    res.render('./accounts/signup');
  });
  app.get('/logout', function (req, res, next) {
    req.logOut();
    res.redirect('/login');
  })

  app.get('/profile', function (req, res, next) {
    res.render('./accounts/profile');
    //console.log(req.body.email);

  })
}