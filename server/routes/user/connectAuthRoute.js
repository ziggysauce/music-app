const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/local', passport.authenticate('local-signup', {
  successRedirect : 'user/profile', // redirect to the secure profile section
  failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
}));

// send to facebook to do the authentication
router.get('/facebook', passport.authorize('facebook', { 
  scope : ['public_profile', 'email'] 
}));

// handle the callback after facebook has authorized the user
router.get('/facebook/callback', passport.authorize('facebook', {
  successRedirect : '/user/profile',
  failureRedirect : '/'
}));

// send to twitter to do the authentication
router.get('/twitter', passport.authorize('twitter', { scope : 'email' }));

// handle the callback after twitter has authorized the user
router.get('/twitter/callback', passport.authorize('twitter', {
  successRedirect : '/user/profile',
  failureRedirect : '/'
}));

// send to google to do the authentication
router.get('/google', passport.authorize('google', { scope : ['profile', 'email'] }));

// the callback after google has authorized the user
router.get('/google/callback', passport.authorize('google', {
  successRedirect : '/profile',
  failureRedirect : '/'
}));

module.exports = router;