const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const Secret = require('./secret');
const user = require('../models/users');

passport.serializeUser(function (user, done) {
    done(null, user.id)
});

passport.deserializeUser(function (id, done) {
    user.findOne({username:username}, function (err, user) {
        done(err, user)

    })
});