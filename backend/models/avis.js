const{DataTypes}= require("sequelize")
const { sequelize } = require(".")
module.exports=(sequelize, DataTypes)=>{
  const avis=sequelize.define("avis",{
    commentaire:{
      type:DataTypes.STRING,
    }


  });
  return avis;

  };
