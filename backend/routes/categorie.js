const express = require("express");
const router = express.Router();
const { createCategorie } = require("../controllers/categorie.controller");

router.post("/", createCategorie);
router.get("/:categorieId");


module.exports = router;
