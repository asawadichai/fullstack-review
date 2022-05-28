const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

const github = require('../helpers/github.js');

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  let data = '';
  var userRepos = [];

  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    github.getReposByUsername(data)
      .then(repos => {
        userRepos = repos;
        console.log(userRepos)
      })
      .catch((err) => {
        console.log(err);
      })
    res.end();
  })


  //saveRepos to DB
});

// TODO - your code here!
// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

