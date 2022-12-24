const express = require("express");
const router = express.Router();
const { createQuiz } = require("../controllers/quiz.controller");

router.post("/", createQuiz);
router.get("/:quizId");


module.exports = router;
