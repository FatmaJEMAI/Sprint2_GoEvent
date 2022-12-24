const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const evenement= sequelize.define("evenement",{
    nom_event:{
      type:DataTypes.STRING,

    },
    lieux_event:{
      type:DataTypes.STRING,

    },
    description:{
      type:DataTypes.STRING,

    },
    prix:{
      type:DataTypes.FLOAT,
    },
    stock_ticket:{
      type:DataTypes.BIGINT,

    },
    date:{
      type:DataTypes.DATE,

    },
    type_event:{
      type:DataTypes.STRING,

    }

  });

  return evenement;
}
