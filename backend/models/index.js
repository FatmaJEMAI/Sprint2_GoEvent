const dbConfig = require("../config/config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize= sequelize;

db.user= require("./user")(sequelize,Sequelize);
db.reservation = require("./reservation")(sequelize,Sequelize);
db.evenement = require("./evenement")(sequelize,Sequelize);
db.avis = require("./avis")(sequelize,Sequelize);
db.serviice = require("./serviice")(sequelize,Sequelize);
db.evenement.hasMany(db.reservation,{as:"reservations",foreignkey:"eventId"});
db.reservation.belongsTo(db.evenement,{
  as:"evenement"
});
db.user.hasMany(db.reservation,{foreignkey:"userId"});
db.reservation.belongsTo(db.user);

//crud event
db.categorie=require("./categorie")(sequelize,Sequelize);
db.evenement=require("./evenement")(sequelize,Sequelize);
db.avis = require("./avis")(sequelize,Sequelize);

db.categorie.hasMany(db.evenement,{as:"evenement",foreignkey:"categorieId"});
db.evenement.belongsTo(db.categorie,{
  as:"categorie"
});
//quiz
db.quiz=require("./quiz")(sequelize,Sequelize);
db.question=require("./question")(sequelize,Sequelize);
db.quiz.hasMany(db.question,{as:"question",foreignkey:"quizId"});
db.question.belongsTo(db.quiz,{
  as:"quiz"
})
//crud jointure avis

db.serviice.hasMany(db.avis,{as:"avis",foreignkey:"serviiceId"});
db.avis.belongsTo(db.serviice,{
  as:"serviice"
});
db.evenement.hasMany(db.avis,{as:"avis",foreignkey:"eventId"});
db.avis.belongsTo(db.evenement,{
  as:"evenement"
});
db.user.hasMany(db.avis,{foreignkey:"userId"});
db.avis.belongsTo(db.user);

//jointure serviice
db.user.hasMany(db.serviice,{foreignkey:"userId"});

db.serviice.belongsTo(db.user);

module.exports = db;

