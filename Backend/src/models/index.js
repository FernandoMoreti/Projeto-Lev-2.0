const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Banco = require("./Bancos"); // seu model único

const db = {
  Banco,
  sequelize,
  Sequelize
};

module.exports = db;
