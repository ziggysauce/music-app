const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');
const configAuth = require('../config');

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  // passport.use(new LocalStrategy(User.authenticate()));

  /*
   * Passport-Local-Strategy Configuration
   * Passport-local Signup
   */
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, (req, username, password, done) => {
    process.nextTick(() => {
      User.findOne({ 'local.username': username }, (err, user) => {
        if (err)
          return done(err);
        if (user) {
          return done(null, false);
        } else {
          // if no user, create new
          const newUser = new User();
          newUser.local.username = username;
          newUser.local.password = newUser.generateHash(password);
          newUser.save((err) => {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });    
    });
  }));

  /*
   * Passport-Local-Strategy Configuration
   * Passport-local Login
   */
  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, (req, email, password, done) => {
    // find a user by username
    User.findOne({ 'local.username': email }, (err, user) => {
      if (err)
        return done(err);
      if (!user)
        return done(null, false);
      if (!user.validPassword(password))
        return done(null, false);
      return done(null, user);
    });
  }));

  /*
   * Facebook-Local-Strategy Configuration
   * Facebook Login/Signup
   */
  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  }, (req, token, refreshToken, profile, done) => { // facebook sends back token and profile
    process.nextTick(() => {
      if (!req.user) {
        // find the user in database based on facebook id
        User.findOne({ 'facebook.fb_id': profile.id }, (err, user) => {
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
            console.log('FOUND FB USER: ', profile);
            const newUser = new User();
            // set facebook information in user model
            newUser.facebook.fb_id = profile.id;                 
            newUser.facebook.token = token;                   
            newUser.facebook.name = profile.displayName;
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
      } else {
        // user already exists and is logged in; link accounts
        const user = req.user; 
        user.facebook.fb_id = profile.id;
        user.facebook.token = token;
        user.facebook.name  = profile.displayName;
        user.save((err) => {
          if (err)
            throw err;
          return done(null, user);
        });
      }
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
  }, (req, token, refreshToken, profile, done) => {
    // User.findOne won't fire until we have all our data back from Google
    process.nextTick(() => {
      if (!req.user) {
        // find user based on their google id
        User.findOne({ 'google.google_id': profile.id }, (err, user) => {
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
            newUser.save((err) => {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      } else {
        // user already exists and is logged in; link accounts
        const user = req.user; 
        user.google.google_id = profile.id;
        user.google.token = token;
        user.google.name  = profile.displayName;
        user.google.email = profile.emails[0].value;
        user.save((err) => {
          if (err)
            throw err;
          return done(null, user);
        });
      }
    });
  }));

  /*
   * Twitter-Local-Strategy Configuration
   * Twitter Login/Signup
   */
  passport.use(new TwitterStrategy({
    consumerKey: configAuth.twitterAuth.clientID,
    consumerSecret: configAuth.twitterAuth.clientSecret,
    callbackURL: configAuth.twitterAuth.callbackURL
  }, (req, token, tokenSecret, profile, done) => {
    // User.findOne won't fire until we have all our data back from Twitter
    process.nextTick(() => {
      if (!req.user) {
        // find user based on their google id
        User.findOne({ 'twitter.twitter_id': profile.id }, (err, user) => {
          if (err)
            return done(err);
          if (user) {
            // if user is found, log in
            console.log('FOUND TWITTER USER: ', user);
            return done(null, user);
          } else {
            // if the user isn't database, create new user
            const newUser = new User();
            newUser.twitter.twitter_id = profile.id;
            newUser.twitter.token = token;
            newUser.twitter.displayName = profile.displayName;
            newUser.twitter.username = profile.username;
            newUser.save((err) => {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      } else {
        // user already exists and is logged in; link accounts
        const user = req.user; 
        user.twitter.twitter_id = profile.id;
        user.twitter.token = token;
        user.twitter.displayName  = profile.displayName;
        user.twitter.username = profile.username;
        user.save((err) => {
          if (err)
            throw err;
          return done(null, user);
        });
      }
    });
  }));
};
