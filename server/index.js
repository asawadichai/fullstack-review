const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

const github = require('../helpers/github.js');
const db = require('../database/index.js');

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  let data = '';

  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    github.getReposByUsername(data)
      .then(repos => {
        repos.forEach((repo) => {
          db.save(repo);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    res.end();
  })
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  db.query().then((results) => {
    res.send(results);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

