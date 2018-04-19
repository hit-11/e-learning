const passport = require('passport');
const passportConfig = require('../config/passport');
module.exports = function (app) {

  app.get('/login', function (req, res, next) {
    res.render('./accounts/login');
  })

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', function(req, res, next){
    passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect: '/login'
  })});


  app.get('/logout', function (req, res, next) {
    req.logOut();
    res.redirect('/login');
  })

  app.get('/profile', function (req, res, next) {
    res.render('./accounts/profile');

  })
}