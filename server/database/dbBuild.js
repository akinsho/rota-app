const QueryFile = require('pg-promise').QueryFile;
const path = require('path');
const { db } = require('./dbConnection');

//TODO this will need to be refactored for Heroku or wherever else
const sql = file => {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
};

const build = sql('./db_build.sql');

db
  .query(build)
  .then(res => console.log('res', res))
  .catch(err => console.log('err', err));
