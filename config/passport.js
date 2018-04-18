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


passport.use(new FacebookStrategy(
    {
        clientId: Secret.facebook.clientId,
        clientSecret: Secret.facebook.clientSecret,
        callbackUrl: Secret.facebook.callbackUrl
    },
    function (token, refreshToken, profile, done) {
        user.findOne({facebook:profile.id}, function (err, user) {
            if(err)
            {
                return done(err);
            }
            if(user)
            {
                return done(null, user);
            }
            else
            {
                     const new_user = new user();
                     new_user.email = profile.email;
                     new_user.profile.name = profile.displayName;
                     new_user.facebook = profile.id;


                new_user.save(function (err) {
                    if(err)
                    {
                        console.log(err);
                    }
                    return done(err, new_user)
                })
            }


        })
    }
));;;;;;;;;;;;;;;;;;;