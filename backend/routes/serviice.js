var express = require('express');
var router = express.Router();
var db=require('../models')
const serviice= require('../controllers/serviice.controller');
const { application } = require('express');




router.get('/affiche',serviice.getAllserviice);
router.post('/add',serviice.createserviice);
router.get('/affiche',(req,res)=>{
    db.serviice.create(req.body).then( (response) =>{
    res.status(200).send(response)}).catch((err)=>{
    res. status(400).send(err)
    })
    });
router.put('/update/:id', (req,res)=>{
db.serviice.update(req. body, {where: {id:req.params.id}}).then((response)=>{
res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
})
});
router.delete('/remove/:id',(req,res)=>{
    db.serviice.destroy({where: {id:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
});


     module.exports=router;
