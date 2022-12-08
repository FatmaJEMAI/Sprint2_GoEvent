var express = require('express');
var router = express.Router();
var db=require('../models')
const question= require('../controllers/question.controller');
const { application } = require('express');

router.get('/affiche',question.getAllquestion);
router.post('/add',question.createquestion);
router.get('/affiche',(req,res)=>{
    db.question.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.question.update(req.body,{where: {id:req.params.id}}).then((response)=>{
res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.question.destroy({where:{id:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
});


     module.exports=router;
