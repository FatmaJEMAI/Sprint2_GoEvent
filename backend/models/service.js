const{DataTypes}= require("sequelize")
const { sequelize } = require(".")
module.exports=(sequelize, DataTypes)=>{
  const service=sequelize.define("service",{
    nom:{
      type:DataTypes.STRING,
    },
    type:{
      type:DataTypes.STRING,

    },
    description:{
      type:DataTypes.STRING,
    },

      contact:{
        type:DataTypes.STRING,

      }

  });
  return service;

  };
