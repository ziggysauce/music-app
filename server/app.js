const express = require('express'); // use express methods
const bodyParser = require('body-parser'); // allows form data to be available in req.body
const path = require('path'); //joins path segments and normalizes resulting path

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(express.static(path.join(__dirname, '../client'))); // joins current path with client path

// start app on specified port
app.listen(PORT, (err) => {
  if (err) { 
    console.log('There was an error connecting to the server', err); 
  }
  else { 
    console.log('You have connected to the server on PORT: ', PORT); 
  }
});