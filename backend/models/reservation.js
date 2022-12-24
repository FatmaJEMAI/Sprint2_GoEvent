const{DataTypes}= require("sequelize")
const { sequelize } = require(".")
module.exports=(sequelize, DataTypes)=>{
  const reservation=sequelize.define("reservation",{
    type_reservation:{
      type:DataTypes.STRING,
    },
    quantite_ticket:{
      type:DataTypes.BIGINT,



    }

  });
  return reservation;

  };
