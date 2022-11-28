const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  const question= sequelize.define("question",{
    question:{
      type:DataTypes.STRING,
      allowNull:false
    },
    option1:{
      type:DataTypes.STRING,
      allowNull:false
    },
    option2:{
      type:DataTypes.STRING,
      allowNull:false

    },
    option3:{
      type:DataTypes.STRING,
      allowNull:false


    },
    bonne_reponse:{
      type:DataTypes.STRING,
      allowNull:false


    }

  });
  return question;
}
