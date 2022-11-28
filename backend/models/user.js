const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  const user= sequelize.define("user",{
    nom:{
      type:DataTypes.STRING,
      allowNull:false
    },
    prenom:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email:{
        type:DataTypes.STRING,
      },
      pwd:{
        type:DataTypes.STRING,
      },
      num_tel:{
        type:DataTypes.FLOAT,
      },
      role:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
    }

  });
  return user;
}
