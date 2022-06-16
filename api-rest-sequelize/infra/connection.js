// Conexão com Sequelize
const { Sequelize }  = require("sequelize");
const env = require("dotenv").config().parsed;

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${env.DATABASE_PATH}`
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', error));

module.exports = sequelize;
