const{DataTypes}= require("sequelize")
const { sequelize } = require(".")
module.exports=(sequelize, DataTypes)=>{
  const quizres=sequelize.define("quizres",{
    score:{
      type:DataTypes.STRING,
    }

  });
  return quizres;

  };
