var express = require('express');
var router = express.Router();
var db=require('../models')
const quiz= require('../controllers/quiz.controller');
const { application } = require('express');




router.get('/affiche',quiz.getAllquiz);
router.post('/add',quiz.createquiz);
router.get('/affiche',(req,res)=>{
    db.quiz.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.quiz.update(req. body, {where: {id:req.params.id}}).then((response)=>{
res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.quiz.destroy({where: {id:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
});


     module.exports=router;
