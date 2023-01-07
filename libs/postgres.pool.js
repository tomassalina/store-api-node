const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({
  host: config.dbHost,
  port: config.dbPort,
  database: config.dbName,
  user: config.dbUser,
  password: config.dbPassword,
});

module.exports = pool;
