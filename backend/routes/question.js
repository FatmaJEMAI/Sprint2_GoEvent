const express = require("express");
const router = express.Router();
const { createQuestion } = require("../controllers/question.controller");

router.post("/", createQuestion);
router.get("/:questionId");


module.exports = router;
