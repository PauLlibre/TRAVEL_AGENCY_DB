const { kMaxLength } = require("buffer");
var express = require("express");
const ReservationController = require("../controllers/reservation-controller");
var router = express.Router();

//GET ALL RESERVATIONS
router.get("/", ReservationController.getAll);

//GET RESERVATIONS BY ID
router.get("/:id", ReservationController.findByPk);

//GET RESERVATIONS BY CHECKIN
router.get("/checkin/:checkin", ReservationController.getByCheckIn);

//GET RESERVATIONS BY CHECKOUT
router.get("/checkout/:checkout", ReservationController.getByCheckOut);

module.exports = router;
