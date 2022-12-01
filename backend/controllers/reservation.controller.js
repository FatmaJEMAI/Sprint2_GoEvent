const { reservation } = require("../models");

const createReservation = async (req, res, next) => {
  const { type_reservation, stock_ticket, userId, eventId } = req.body;
  try {
    const createdReservation = await reservation.create({
      type_reservation,
      stock_ticket,
      userId,
      eventId
    });
    res.status(201).json({
      createdReservation,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getReservation=async (req,res)=>{
  try{
    const{reservationId}= req.params;
    const reservationData = await reservation.findOne({
      where:{id:reservationId},
    });
    if(!reservationData){
      throw new Error("Reservation not found");
    }
    res.status(200).json({
      reservationData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updateReservation = async(req,res)=>{
  try{
    const{reservationId}=req.params;
    const[updated]=await reservation.update(req.body,{
      where:{id:reservationId},
    });
    if(update){
      const updateReservation = await reservation.findOne({where:{id:reservationId}});
      res.status(200).json({
        reservation : updateReservation,
      });
    }
    throw new Error("User not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deleteReservation= async(req,res)=>{
  try{
    const{reeservationId}= req.params;
    const deleted = await reservation.destroy({
     where:{id:reservationId},
    });
    if(!deleted){
      throw new Error("Reservation not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllReservation = async(req,res)=>{
  try{
    const reservations = await reservation.findAll();
    if(!reservation){
      throw new Error("Reservation not found");
    }
    res.status(200).json({
      reservations
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createReservation,
  getReservation,
  updateReservation,
  deleteReservation,
  getAllReservation,
};
