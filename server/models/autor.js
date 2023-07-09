const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Autor = sequelize.define(
  "Autor",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Autor",
  },
);

module.exports = Autor;
