const { Pool } = require('pg');

const pool = new Pool({
  user: 'mihaelis', //marinokol
  host: '138.68.87.73', //138.68.87.73
  database: 'db_mihaelis', // db_marinokol
  password: 'db_mihaelis', // your password
  port: 5432, // 5432
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}

