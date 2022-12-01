const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const evenement= sequelize.define("evenement",{
    nom_event:{
      type:DataTypes.STRING,
      allowNull:false
    },
    lieux_event:{
      type:DataTypes.STRING,
      allowNull:false
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
      allowNull:false
    },
    type_event:{
      type:DataTypes.STRING,

    }
    //  evenement.associate=models =>{
    //   evenement.hasOne(models.categorie,{
    //     onDelete:"cascade"
    //   })
    // }
  //  const db={};
  //  db.sequelize= sequelize;
  //  db.sequelize = sequelize;
  //  db.evenement.hasOne(db.categorie,{as:"categorie"});
  //  db.categorie.belongsTo(db.evenement,{
  //   foreignKey :"id_categorie",
  //   as:"categorie",
  //  })
  });

  return evenement;
}
