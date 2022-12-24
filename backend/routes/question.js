const express = require("express");
const router = express.Router();
const { createQuestion } = require("../controllers/question.controller");

router.post("/ajout", createQuestion);
router.get("/:idQuestion");


module.exports = router;
