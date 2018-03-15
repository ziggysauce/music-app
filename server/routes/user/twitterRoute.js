const express = require('express');
const router = express.Router();
const passport = require('passport');

/*
 * GET ROUTE
 * Twitter authentication and login
 */
router.get('/twitter', passport.authenticate('twitter'));

/*
 * GET ROUTE
 * Twitter callback after authenticating user
 */
router.get('/twitter/callback', passport.authenticate('twitter', {
    failureRedirect : '/login'
  }), (req, res) => {
    res.redirect('/user/profile');
  });

module.exports = router;

