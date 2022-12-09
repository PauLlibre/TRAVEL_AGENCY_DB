const { Op } = require("sequelize");

const { Clients, Hotels, Reservations } = require("../models.js");
const { sequelize } = require("../models/index");

const ReservationController = {};

//Find Reservation by Id
ReservationController.findByPk = (req, res, next) => {
  try {
    const id = req.params.id;
    Reservations.findByPk(id, {
      include: [
        {
          model: Clients,
          as: "client",
        },
        {
          model: Hotels,
          as: "hotel",
        },
      ],
    }).then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({
          message: "The resource you are looking for doesn't exist.",
        });
      }
    });
  } catch {
    res.status(500).send({
      message: "Bad Getaway",
    });
  }
};

//Find All Reservations
ReservationController.getAll = (req, res, next) => {
  try {
    Reservations.findAll({
      include: [
        {
          model: Clients,
          as: "client",
        },
        {
          model: Hotels,
          as: "hotel",
        },
      ],
    }).then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({
          message: "The resource you are looking for doesn't exist.",
        });
      }
    });
  } catch {
    res.status(500).send({
      message: "Bad Getaway",
    });
  }
};

//GET RESERVATIONS BY CHECKIN
ReservationController.getByCheckIn = async (req, res) => {
  const checkin = req.params.checkin;
  const data = await Reservations.findAll({
    where: {
      checkin: { [Op.like]: `%${checkin}%` },
    },
    include: [
      {
        model: Clients,
        as: "client",
      },
      {
        model: Hotels,
        as: "hotel",
      },
    ],
  });
  res.json(data);
};

// GET RESERVATIONS BY CHECKOUT
ReservationController.getByCheckOut = async (req, res) => {
  const checkout = req.params.checkout;
  const data = await Reservations.findAll({
    where: {
      checkout: { [Op.like]: `%${checkout}%` },
    },
    include: [
      {
        model: Clients,
        as: "client",
      },
      {
        model: Hotels,
        as: "hotel",
      },
    ],
  });
  res.json(data);
};

module.exports = ReservationController;
