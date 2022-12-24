var express = require('express');
var router = express.Router();
var db=require('../models');
const evenement= require('../controllers/evenement.ontroller');
const { application } = require('express');



router.get('/display', evenement.getAllEvenement);
router.post('/add',evenement.createEvenement);
router.get('/:evenementId',evenement.getEvenementById);
router.get('/display',(req,res)=>{
    db.evenement.create(req.body).then( (response) =>{
        res.status(200).send(response)}).catch((err)=>{
        res. status(400).send(err)
        })
});
router.put('/update/:id',(req,res)=>{
  db.evenement.update(req. body, {where: {id:req.params.id}}).then((response)=>{
    return res.status(200).json(response)}).catch((err)=>{
    return res.status(400).json(err.message)
    })
});


    router.delete('/remove/:id',(req,res)=>{
    db.evenement.destroy({where: {id:req.params.id}}).then((response)=>{
      return  res.status(201).json(response)}).catch((err)=>{
        return res.status(400).json(err)
    })
  });


module.exports = router;
