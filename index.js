var request = require('request')
const keys = require('./keys')

var options = {
  url: 'https://api.twitch.tv/helix/streams?first=5',
  headers: {
    'Client-ID': keys.id
  }
}

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    var info = JSON.parse(body)
  }
}

request(options, callback)
