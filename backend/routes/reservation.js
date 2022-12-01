const express = require("express");
const router = express.Router();
const { createReservation } = require("../controllers/reservation.controller");

router.post("/", createReservation);
router.get("/:reservationId");


module.exports = router;
