const express = require('express');
const router = express.Router();
const passport = require('passport');


/*
 * GET ROUTE
 * Google authentication and login
 */
router.get('/google', passport.authenticate('google', { 
  scope : ['profile', 'email']
}));

/*
 * GET ROUTE
 * Google callback after authenticating user
 */
router.get('/google/callback', passport.authenticate('google', {
    successRedirect : '/user/profile',
    failureRedirect : '/login'
  }));

module.exports = router;