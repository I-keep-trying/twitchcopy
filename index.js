var request = require('request'); 

var options = {
  url: 'https://api.twitch.tv/helix/streams?first=5',
  headers: {
    'Client-ID': 'iy25o25wjejp9dg0g446t3dnnsu8aw'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    var info = JSON.parse(body);
    
  }
}

request(options, callback);
