const { Sequelize } = require('sequelize');
require('dotenv').config();

const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize('db', 'root', DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
