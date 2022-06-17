var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'repo'
})

con.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to db')
  }
})

module.exports = con;