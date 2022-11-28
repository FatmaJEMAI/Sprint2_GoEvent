const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  const quiz= sequelize.define("quiz",{
    nom:{
      type:DataTypes.STRING,
      //allowNull:false
    },

  });
  return quiz;
}
