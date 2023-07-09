const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const Autor = require("./autor");

const Conteudo = sequelize.define(
  "Conteudo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    autorId: {
      type: DataTypes.INTEGER,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    conteudo: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Conteudo",
  },
);
Conteudo.belongsTo(Autor, { foreignKey: "autorId" });
module.exports = Conteudo;
