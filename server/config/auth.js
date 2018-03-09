require('dotenv').config();

module.exports = {
  'facebookAuth' : {
    'clientID': process.env.FB_CLIENT_ID,
    'clientSecret': process.env.FB_CLIENT_SECRET,
    'callbackURL': 'http://localhost:8080/auth/facebook/callback',
    'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API
  },
  // 'googleAuth' : {
  //   'clientID': 'your-secret-clientID-here',
  //   'clientSecret': 'your-client-secret-here',
  //   'callbackURL': 'http://localhost:8080/auth/google/callback'
  // }
};
