const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const categorie= sequelize.define("categorie",{
    nom:{
      type:DataTypes.STRING,

    },


  });

  return categorie;
}
