const express = require("express");
const router = express.Router();
var db=require('../models');
const  reservation= require("../controllers/reservation.controller");
const { application } = require("../models");

router.get('/affiche',reservation.getAllReservation);
 router.post('/add', reservation.createReservation);
 router.get('/:reservationId',reservation.getReservationById);
router.get("/affiche", (req,res)=>{
  db.reservation.create(req.body).then( (response) =>{
  res.status(200).send(response)}).catch((err)=>{
  res. status(400).send(err)
  })
});
router.put("/modifier/:id",(req,res)=>{
  db.reservation.update(req. body, {where: {id:req.params.id}}).then((response)=>{
  res.status(200).json(response)}).catch((err)=>{
  res.status(400).json(err)
  })
});
router.delete('/supprimer/:id', (req,res)=>{

         db.reservation.destroy({
         where:{id:req.params.id}}).then((response)=>{
          res.status(200).json(response)}).catch((err)=>{
            res.status(400).json(err)
          })

});

module.exports = router;
