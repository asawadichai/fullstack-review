var db = require('../database');

module.exports = {
  post: function(data, callback) {
    var repos = [];
    data.forEach((item) => {
      repos.push(new Promise(function(resolve, reject) {
        db.query(`INSERT INTO repos VALUES (${item.id}, '${item.full_name}', '${item.html_url}', ${item.watchers}) ON DUPLICATE KEY UPDATE watchers=${item.watchers}`, function (err, result) {
          if (err) {
            return reject(err);
          } else {
            console.log('resolved');
            resolve(result);
          }
        })
      }))
    })
    return Promise.all(repos);
  },
  get: function(callback) {
    db.query('SELECT * FROM repos ORDER BY watchers DESC LIMIT 25', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        callback(result);
      }
    })
  }
}
