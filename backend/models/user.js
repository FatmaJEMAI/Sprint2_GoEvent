const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  const user= sequelize.define("user",{
    nom:{
      type:DataTypes.STRING,

    },
    prenom:{
        type:DataTypes.STRING,

      },
      email:{
        type:DataTypes.STRING,
      },
      password:{
        type:DataTypes.STRING,
      },
      num_tel:{
        type:DataTypes.FLOAT,
      },
      role:{
      type:DataTypes.STRING,

    },
    image:{
      type:DataTypes.STRING,
    }

  });
  return user;
}
