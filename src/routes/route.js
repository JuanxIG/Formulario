const express = require("express");
const router = express.Router();
const indexController = require("../controllers/controller")
const validacion = require("../validacionesBack/validation")

router.get("/", indexController.index)
router.post("/", validacion, indexController.control)

module.exports = router