var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const reservationsRouter = require("./routes/reservations");
const hotelsRouter = require("./routes/hotels");
const router = require("express").Router();

router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/reservation", reservationsRouter);
router.use("/hotel", hotelsRouter);

module.exports = router;
