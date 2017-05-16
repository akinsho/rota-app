const pgp = require('pg-promise')();
require('dotenv').config();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'rota',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db = pgp(connection);

module.exports = {
  db,
};
