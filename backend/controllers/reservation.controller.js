const { reservation } = require("../models");

const createReservation = async (req, res, next) => {
  let Reservation = req.body;

  try {
    {
      const newreservation = await reservation.create({
        type_reservation: Reservation.type_reservation,
        quantite_ticket: Reservation.quantite_ticket,
        // evenementId: Reservation.evenementId,
        // userId: Reservation.userId,
      });
      return res
        .status(201)
        .json({ message: "succes de creation ", newreservation });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getAllReservation = async (req, res) => {
  try {
    const reservations = await reservation.findAll();
    if (!reservation) {
      throw new Error("Reservation not found");
    }
    res.status(200).json({
      reservations,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log(error);
  }
};
const getReservationById = async (req, res, next) => {
  try {
    const {reservationId} = req.params;
    const reservationdata = await reservation.findOne({
      where: {id: reservationId}
    });
    if (!reservationdata) {
      throw new Error("No event found");
    }
    res.status(200).json({reservationdata});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReservation,
  getAllReservation,
  getReservationById
};
