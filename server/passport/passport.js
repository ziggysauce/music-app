const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');
const configAuth = require('./auth');

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
   * Facebook Login
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
        newUser.facebook.id = profile.id;                 
        newUser.facebook.token = token;                   
        newUser.facebook.name  = `${profile.name.givenName} ${profile.name.familyName}`;
        newUser.facebook.email = profile.emails[0].value;
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
};
