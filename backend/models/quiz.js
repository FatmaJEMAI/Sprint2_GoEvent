const{DataTypes}= require("sequelize")
const { sequelize } = require(".")
module.exports=(sequelize, DataTypes)=>{
  const quiz=sequelize.define("quiz",{
    nom:{
      type:DataTypes.STRING,
    }

  });
  return quiz;

  };
