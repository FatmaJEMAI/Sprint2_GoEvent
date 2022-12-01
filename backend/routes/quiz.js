const express = require("express");
const router = express.Router();
const { createQuiz } = require("../controllers/quiz.controller");

router.post("/", createQuiz);
router.get("/:quizId");


module.exports = router;

// var express = require('express');
// const quizModel = require("../models/quiz");
// var router = express.Router();
// var db=require('../models');
// const { response } = require('express');
// // const { async } = require('rxjs');
// const quiz = require('../models/quiz');

// router.get('/',async (req,res)=>{
// const quizz = await db.quiz.findAll();
// res.json(quizz);
// });




//   // const { nom_event, lieux_event,description,prix,date,type_event } = req.body;
//   // const quiz = new quizModel({
//   //   nom_event,
//   //   lieux_event,
//   //   description,
//   //   prix,
//   //   date,
//   //   type_event

//   // });
//   // try {
//   //   await quiz.save();
//   //   res.redirect("/quiz");
//   // } catch (err) {
//   //   res.status(400).json({ message: err.message });
//   // }
// // });
// router.post('/add',(req,res)=>{

// db.quiz.create(req.body).then((response)=>{
//   res.json(200).send(response)}).catch((err)=>{
// res.json(400).send(err)
// })

// });

// router.put('/update/:id',(req,res)=>{
//   db.quiz.update(req.body,{where:{id:req.params.id}}).then((response)=>{
//     res.json(200).send(response)}).catch((err)=>{
//   res.json(400).send(err)
//   })

// });

//   router.delete('/remove/:id',(req,res)=>{
//     db.quiz.destroy({where:{id:req.params.id}}).then((response)=>{
//       res.json(200).send(response)}).catch((err)=>{
//     res.json(400).send(err)
//     })


//     });
//     router.get('/quiz/:id',(req,res)=>{
//       db.quiz.findOne({where:{id: req.params.id}}).then((response)=>{
//         res.json(200).send(response)}).catch((err)=>{
//           res.json(400).send(err)
//           })


//           });

//           router.get('/fetch',(req,res)=>{
//             db.quiz.findAll().then((response)=>{
//               res.json(200).send(response)}).catch((err)=>{
//             res.json(400).send(err)
//             })


//             });
//     module.exports = router;
