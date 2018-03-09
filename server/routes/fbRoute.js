const express = require('express');
const router = express.Router();
const passport = require('passport');


/*
 * GET ROUTE
 * Facebook authentication and login
 */
router.get('/auth/facebook', passport.authenticate('facebook', { 
  scope : ['public_profile', 'email']
}));

/*
 * GET ROUTE
 * Facebook callback after authenticating user
 */
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect : '/user/profile',
    failureRedirect : '/login'
  }));

/*
 * GET ROUTE
 * READ -- Get facebook login user information
 */
router.get('/auth', (req, res) => {
  console.log(req.user.facebook);
  res.send({ user: req.user.facebook.name });
});

/*
 * GET ROUTE
 * Facebook logout
 */
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;