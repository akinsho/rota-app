const pgp = require('pg-promise')();
require('dotenv').config();
const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'rota',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db = pgp(connection);
const sql = file => {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
};

const build = sql('./db_build.sql');


db
  .query(build)
  .then(res => console.log('res', res))
  .catch(err => console.log('err', err));
