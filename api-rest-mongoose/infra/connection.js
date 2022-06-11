const mongoose = require("mongoose");
const env = require("dotenv").config().parsed;

const { DB_USER, DB_PASS, DB_HOST, DB_PORT } = env;
const mongoURI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/admin`;

const db = mongoose.connect(mongoURI); // Promise

db
  .then(() => { console.log(`Connected at ${mongoURI}`); })
  .catch((err) => { console.log(`Not Connected: ${err}`); });

module.exports = db;
