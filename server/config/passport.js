const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../model/userModel");
require('dotenv').config();

// save user id to the session
passport.serializeUser((user, done) => {
    done(null, user.id); /* user.id from mongoDb */
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});



passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ email: profile.emails[0].value }).then((currentUser) => {
                if (currentUser) {
                    // user exists
                    console.log(`user is : ${currentUser}`);
                    done(null, currentUser);

                } else {
                    // user does not exists
                    new User({
                        googleId: profile.id,
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value
                    }).save().then((newUser) => {
                        console.log(`new user created : ${newUser}`);
                        done(null,newUser);
                        
                    });
                }
            })

        }
    )
);

