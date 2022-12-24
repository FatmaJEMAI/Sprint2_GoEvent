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
db.service = require("./service")(sequelize,Sequelize);
db.question = require("./question")(sequelize,Sequelize);
db.quiz = require("./quiz")(sequelize,Sequelize);
db.quizres = require("./quizres")(sequelize,Sequelize);
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

db.service.hasMany(db.avis,{as:"avis",foreignkey:"serviceId"});
db.avis.belongsTo(db.service,{
  as:"service"
});
db.evenement.hasMany(db.avis,{as:"avis",foreignkey:"eventId"});
db.avis.belongsTo(db.evenement,{
  as:"evenement"
});
db.user.hasMany(db.avis,{foreignkey:"userId"});
db.avis.belongsTo(db.user);

//jointure service
db.user.hasMany(db.service,{foreignkey:"userId"});

db.service.belongsTo(db.user);




// jointure quiz
db.user.hasMany(db.quiz,{foreignkey:"userId"});

db.quiz.belongsTo(db.user);



// jointure quizres
 db.quiz=require("./quiz")(sequelize,Sequelize);
 db.quizres=require("./quizres")(sequelize,Sequelize);
 db.quiz.hasMany(db.quizres,{as:"quizres",foreignkey:"quizId"});
 db.quizres.belongsTo(db.quiz,{
 as:"quiz"

 })

db.user.hasMany(db.quizres,{foreignkey:"userId"});


db.quizres.belongsTo(db.user);

db.quiz.hasMany(db.quizres,{foreignkey:"quizId"});

db.quizres.belongsTo(db.quiz);

module.exports = db;

