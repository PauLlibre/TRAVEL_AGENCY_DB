const { kMaxLength } = require("buffer");
var express = require("express");
const ClientController = require("../controllers/client-controller");
var router = express.Router();

/* GET users listing. */
router.get("/", ClientController.getAll);

// GET users by Id
router.get("/:id", ClientController.findByPk);

// GET users by Name
router.get("/name/:name", ClientController.getByName);

// GET users by DNI
router.get("/dni/:dni", ClientController.getByDni);

// GET users by phone
router.get("/phone/:phone", ClientController.getByPhone);

// GET users by mail
router.get("/mail/:mail", ClientController.getByMail);

module.exports = router;
