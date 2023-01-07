const { Client } = require('pg');
const config = require('../config');

const getConnection = async () => {
  const client = new Client({
    host: config.dbHost,
    port: config.dbPort,
    database: config.dbName,
    user: config.dbUser,
    password: config.dbPassword,
  });
  await client.connect();
  return client;
};

module.exports = getConnection;
