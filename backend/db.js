const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host : 'mysql',
  user : 'root',
  password : 'dk99521',
  database : 'myapp'

});

// 내보내기
exports.pool = pool;