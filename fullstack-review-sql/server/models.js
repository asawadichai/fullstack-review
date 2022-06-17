var db = require('../database');

module.exports = {
  post: function(data, callback) {
    data.forEach((item) => {
      console.log({id: item.id, full_name: item.full_name, html_url: item.html_url, watchers: item.watchers})
      db.query(`INSERT INTO repos VALUES (${item.id}, '${item.full_name}', '${item.html_url}', ${item.watchers})
        ON DUPLICATE KEY UPDATE watchers=${item.watchers}`, (err, result) => {
        if (err) {
          console.error(err.sqlMessage);
        } else {
          console.log('inserting');
        }
      })
    })
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
