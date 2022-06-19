const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

const github = require('../helpers/github.js');
const models = require('./models.js');

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let data = '';
  var results = [];

  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    github.getReposByUsername(data)
    .then(repos => {
      models.post(repos)
      .then(
        models.get(data => {
          res.status(201);
          res.json(data);
        })
      )
    })
    .catch(err => {
      console.log('error', err);
      res.sendStatus(404);
    })
  })
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  models.get(data => {
    console.log(data)
    res.json(data);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

