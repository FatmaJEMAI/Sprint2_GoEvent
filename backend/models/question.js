const{DataTypes}= require("sequelize")
const { sequelize } = require(".")
module.exports=(sequelize, DataTypes)=>{
  const question=sequelize.define("question",{
     questiondata:{
       type:DataTypes.STRING,
    },
    option1:{
      type:DataTypes.STRING,

    },
    option2:{
      type:DataTypes.STRING,
    },

      option3:{
        type:DataTypes.STRING,

      },

      bonne_reponse:{
        type:DataTypes.STRING,
      }

  });
  return question;

  };
