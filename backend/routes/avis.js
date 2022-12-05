var express = require('express');
var router = express.Router();
var db=require('../models')
const avis= require('../controllers/avis.controller');
const { application } = require('express');




router.get('/affiche',avis.getAllavis);
router.post('/add',avis.createavis);
router.get('/affiche',(req,res)=>{
    db.avis.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.avis.update(req. body, {where: {id:req.params.id}}).then((response)=>{
res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.avis.destroy({where: {id:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
});


     module.exports=router;
