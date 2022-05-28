const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id: Number,  //github id
  name: String, //name of repo
  full_name: String,  //username with repo name
  html_url: String, //link to repon on gitup
  owner: {
    login: String,
    avatar_url: String
  },
  meta: {
    forks: Number,  //stats used to calculate top 25 repos
    watchers: Number,
    open_issues: Number
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;