const express = require("express");
const router = express.Router();
var db=require('../models');
const categorie= require('../controllers/categorie.controller');
const { application } = require('express');

router.get('/affich', categorie.getAllCategorie)
router.post("/ajout", categorie.createCategorie);
router.get('/:categorieId',categorie.getcategorieById);
router.get('/affich' ,(req,res)=>{
  db.categorie.create(req.body).then( (response) =>{
      res.status(200).send(response)}).catch((err)=>{
      res. status(400).send(err)
      })
});
router.put('/modifier/:id',(req,res)=>{
  db.categorie.update(req. body, {where: {id:req.params.id}}).then((response)=>{
    return res.status(200).json(response)}).catch((err)=>{
    return res.status(400).json(err.message)
    })
});
router.delete('/supprimer/:id',(req,res)=>{
  db.categorie.destroy({where: {id:req.params.id}}).then((response)=>{
    return  res.status(201).json(response)}).catch((err)=>{
      return res.status(400).json(err)
  })
});


module.exports = router;
