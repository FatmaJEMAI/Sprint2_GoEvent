const express = require("express");
const router = express.Router();
const { createEvenement } = require("../controllers/evenement.ontroller");

router.post("/", createEvenement);
router.get("/:eventId");


module.exports = router;
