const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('../models/user');
const router = express.Router();


// router.get('/',  (req, res) => {
//   res.render('index', { user : req.user });
// });

// router.get('/signup', (req, res) => {
//   res.render('register', { });
// });

router.post('/signup', (req, res) => {
  User.register(new User({ username : req.body.username }), req.body.password, (err, newUser) => {
    if (err) {
      console.log(err);
      res.send('AN ERROR OCURRED');
    }
    passport.authenticate('local')(req, res, () => {
      console.log('new user created: ', newUser);
      res.redirect('/');
    });
  });
});

// router.get('/login', (req, res) => {
//   res.render('/login', { user : req.user });
// });

// router.get('/users/:id', (req, res) => {
//   console.log('this is the get request: ', req.user);
//   // res.sendFile((path.join(__dirname, '../../client/index.html')));
//   res.status(200).send({ user: req.user });
// });

router.post('/login', passport.authenticate('local', {
  // successRedirect: '/',
  failureRedirect: '/login',
}), (req, res) => {
  console.log('successfully logged in: ', req.user);
  res.redirect('/users/' + req.user.username);
});

router.get('/logout', (req, res) => {
  console.log('successfully logged out: ', req.user.username);
  req.logout();
  res.redirect('/');
});

module.exports = router;