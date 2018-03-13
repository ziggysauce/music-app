const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');
const configAuth = require('../config');

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    console.log("deserialize; user info: ", user);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      console.log("serialize; user info: ", user);
      done(null, user);
    });
  });

  passport.use(new LocalStrategy(User.authenticate()));


  /*
   * Facebook-Local-Strategy Configuration
   * Facebook Login/Signup
   */
  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  }, (token, refreshToken, profile, done) => { // facebook sends back token and profile
    process.nextTick(() => {
    // find the user in database based on facebook id
    User.findOne({ 'facebook.id' : profile.id }, (err, user) => {
      // if error (connecting to database), stop and return
      if (err) {
        console.log('there was an error: ');
        return done(err);
      } else if (user) {
        // found user; login and return user
        console.log('found the user: ', user);
        return done(null, user);
      } else {
        // no user found with that facebook id; create new user
        console.log('this is the fb profile: ', profile);
        const newUser = new User();
        // set facebook information in user model
        newUser.facebook.fb_id = profile.id;                 
        newUser.facebook.token = token;                   
        newUser.facebook.name  = profile.displayName;
        // save user to database
        newUser.save((err) => {
          if (err) {
            throw err;
          }
          // if successful, return new user
          return done(null, newUser);
          });
        }
      });
    });
  }));

  /*
   * Google-Local-Strategy Configuration
   * Google Login/Signup
   */
    passport.use(new GoogleStrategy({
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL,
  }, (token, refreshToken, profile, done) => {
    // User.findOne won't fire until we have all our data back from Google
    process.nextTick(() => {
      // find user based on their google id
      User.findOne({ 'google.id': profile.id }, (err, user) => {
        if (err)
          return done(err);
        if (user) {
          // if user is found, log in
          console.log('FOUND GOOGLE USER: ', user);
          return done(null, user);
        } else {
          // if the user isn't database, create new user
          const newUser = new User();
          newUser.google.google_id = profile.id;
          newUser.google.token = token;
          newUser.google.name = profile.displayName;
          newUser.google.email = profile.emails[0].value;
          // save user to database
          newUser.save((err) => {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));
};
