const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // uses the axios module to request repos for a specific
  // user from the github API
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios({
    method: 'GET',
    url: options.url,
    headers: options.headers
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports.getReposByUsername = getReposByUsername;