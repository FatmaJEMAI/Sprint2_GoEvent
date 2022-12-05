var express = require('express');
var router = express.Router();
var db=require('../models')
const service= require('../controllers/service.controller');
const { application } = require('express');




router.get('/affiche',service.getAllservice);
router.post('/add',service.createservice);
router.get('/affiche',(req,res)=>{
    db.service.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.service.update(req. body, {where: {id:req.params.id}}).then((response)=>{
res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.service.destroy({where: {id:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
});


     module.exports=router;
