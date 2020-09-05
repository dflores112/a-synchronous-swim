const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypress = require('./keypressHandler');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // console.log(req);

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
    //next();
  }

  // if req.method is a GET request
  if (req.method === 'GET') {
    if (req.url === '/') {
      // supply a random swim move as res._data
      // var moves =['up', 'down', 'right', 'left'];
      // var index = Math.floor(Math.random()*4);
      var key = keypress.initialize();
      res.writeHead(200, headers);
      console.log(key);
      res.end(key);
      //next();
    }
  }


  // invoke next() at the end of a request to help with testing!
};

























//router
//parse the request
//do some logic based on request
//respond with the correct response code and data