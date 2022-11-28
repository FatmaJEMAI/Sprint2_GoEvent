var express = require('express');
const questionModel = require("../models/question");
var router = express.Router();
var db=require('../models');
const { response } = require('express');
const { async } = require('rxjs');
const question = require('../models/question');

router.get('/',async (req,res)=>{
const ques = await db.question.findAll();
res.json(ques);
});




router.post('/add',(req,res)=>{

db.question.create(req.body).then((response)=>{
  res.json(200).send(response)}).catch((err)=>{
res.json(400).send(err)
})

});

router.put('/update/:id',(req,res)=>{
  db.question.update(req.body,{where:{id:req.params.id}}).then((response)=>{
    res.json(200).send(response)}).catch((err)=>{
  res.json(400).send(err)
  })


  });

  router.delete('/remove/:id',(req,res)=>{
    db.question.destroy({where:{id:req.params.id}}).then((response)=>{
      res.json(200).send(response)}).catch((err)=>{
    res.json(400).send(err)
    })


    });
    router.get('/question/:id',(req,res)=>{
      db.question.findOne({where:{id: req.params.id}}).then((response)=>{
        res.json(200).send(response)}).catch((err)=>{
          res.json(400).send(err)
          })


          });

          router.get('/fetch',(req,res)=>{
            db.question.findAll().then((response)=>{
              res.json(200).send(response)}).catch((err)=>{
            res.json(400).send(err)
            })


            });
    module.exports = router;
