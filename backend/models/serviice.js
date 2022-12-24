
module.exports=(sequelize, DataTypes)=>{
  const serviice=sequelize.define("serviice",{
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
  return serviice;

  };
