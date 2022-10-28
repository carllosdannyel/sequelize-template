require('dotenv/config');

const development = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'database',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: process.env.MYSQL_DIALECT || 'mysql',
};

const test = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'database',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: process.env.MYSQL_DIALECT || 'mysql',
};

const production = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'database',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: process.env.MYSQL_DIALECT || 'mysql',
};

module.exports = { development, test, production };
