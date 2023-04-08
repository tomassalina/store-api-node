const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  apiKey: process.env.API_KEY,
};

module.exports = config;
