const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', () => {
  console.log('connected to mongodb');
});

let repoSchema = mongoose.Schema({
  _id: Number,  //github repo id
  name: String, //name of repo
  full_name: String,  //username with repo name
  html_url: String, //link to repon on gitup
  owner: {
    login: String,
    id: Number,
    avatar_url: String,
    html_url: String
  },
  meta: {
    forks: Number,  //stats used to calculate top 25 repos
    watchers: Number,
    open_issues: Number
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (item) => {
  var incommingRepo = new Repo({
    _id: item.id,
    name: item.name,
    full_name: item.full_name,
    html_url: item.html_url,
    owner: {
      login: item.owner.login,
      id: item.owner.id,
      avatar_url: item.owner.avatar_url,
      html_url: item.owner.html_url
    },
    meta: {
      forks: item.forks_count,
      watchers: item.watchers_count,
      open_issues: item.open_issues_count
    }
  })

  Repo.findOneAndUpdate({_id: item.id}, incommingRepo, {
    new: true,
    upsert: true
  });
}

module.exports.save = save;