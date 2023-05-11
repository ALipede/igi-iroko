const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'local',
  user: 'root',
  database: 'icons-set',
  password: 'j0j01ss1#MySQL',
});

module.exports = pool.promise();
