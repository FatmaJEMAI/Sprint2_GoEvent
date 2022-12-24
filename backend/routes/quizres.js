var express = require('express');
var router = express.Router();
var db=require('../models')
const quizres= require('../controllers/quizres.controller');
const { application } = require('express');




router.get('/affiche',quizres.getAllquizres);
router.post('/add',quizres.createquizres);
router.get('/affiche',(req,res)=>{
    db.quizres.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.quizres.update(req. body, {where: {id:req.params.id}}).then((response)=>{
res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.quizres.destroy({where: {id:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
});


     module.exports=router;
