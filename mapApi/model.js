const request = require('request');

 getMap = function (url) {  
    request(url, (error, response, body) => {
            return  { error, response, body}
        });
}
  module.exports = mapModel = getMap