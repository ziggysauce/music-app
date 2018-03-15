const express = require("express");
const router = express.Router();
const path = require('path');
const passport = require('passport');
const middleware = require('../middleware')
const User = require('../models/user');

/*
 * POST ROUTE
 * CREATE -- Make new user
 */
router.post('/signup', passport.authenticate('local-signup', {
  failureRedirect : '/signup', 
}), (req, res) => {
  console.log('successfully signed up: ', req.user);
  res.redirect('/user/' + req.user._id);
});

/*
 * POST ROUTE
 * READ -- Login user
 */
router.post('/login', passport.authenticate('local-login', {
  failureRedirect : '/login', 
}), (req, res) => {
  console.log('successfully logged in: ', req.user);
  res.redirect('/user/' + req.user._id);
});


/*
 * GET ROUTE
 * READ -- Get login user information
 */
router.get('/user/:id', (req, res) => {
  User.findById(req.params.id).exec((err, foundUser) => {
    if (err || !foundUser) {
      console.log('There was a problem: ', err);
      res.redirect('/');
    } else {
      console.log('USER INFOOO: ', foundUser);
      res.send({ user: foundUser.local.username });
    }
  });
});

/*
 * GET ROUTE
 * READ -- Get user credentials for updating
 */
router.get('/user/:id/edit', middleware.isLoggedIn, (req,res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.send({ user: foundUser });
  });
});

/*
 * PUT ROUTE
 * UPDATE -- Edit user credentials
 */
router.put('/user/:id', middleware.isLoggedIn, (req,res) => {
  // Input fields need to be wrapped, ex: name="user[username]"
  User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
    if (err) {
      res.redirect('/');
    } else {
      console.log('Successfully updated user: ', updatedUser);
      res.redirect('/user/' + req.params.id);
    }
  });
});

/*
 * DELETE ROUTE
 * DESTROY -- Delete user and associated credentials
 */
router.delete('/user/:id', middleware.isLoggedIn, (req,res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log('There was an error: ', err);
      res.redirect('/');
    } else {
      console.log('Successfully deleted user account');
      res.redirect('/');
    }
  });
});

// LOGOUT route
// /user/logout no 'routes'
router.get('/logout', (req, res) => {
  console.log('successfully logged out: ', req.user);
  req.logout();
  res.redirect('/');
});

module.exports = router;