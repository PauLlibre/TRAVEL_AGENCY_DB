const { kMaxLength } = require("buffer");
var express = require("express");
const HotelController = require("../controllers/hotel-controller");
var router = express.Router();

// GET ALL HOTELS
router.get("/", HotelController.getAll);

// GET HOTELS BY ID
router.get("/:id", HotelController.findByPk);

// GET HOTELS BY NAME
router.get("/name/:name", HotelController.getByName);

module.exports = router;
