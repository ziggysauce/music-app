const express = require('express');
const router = express.Router();
const passport = require('passport');


/*
 * GET ROUTE
 * Facebook authentication and login
 */
router.get('/facebook', passport.authenticate('facebook', { 
  scope : ['public_profile', 'email']
}));

/*
 * GET ROUTE
 * Facebook callback after authenticating user
 */
router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect : '/user/profile',
    failureRedirect : '/login'
  }));

/*
 * GET ROUTE
 * READ -- Get facebook/google/twitter login user information
 */
router.get('/', (req, res) => {
  if (req.user) {
    console.log('FROM ROUTES, FB USER: ', req.user.facebook);
    console.log('FROM ROUTES, GOOGLE USER: ', req.user.google);
    console.log('FROM ROUTES, TWITTER USER: ', req.user.twitter);
    res.send({ user: req.user.facebook.name || req.user.twitter.displayName || req.user.google.name });
  } else {
    res.send({ user: null });
  }
});

module.exports = router;