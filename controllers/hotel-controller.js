const { Op } = require("sequelize");
const models = require("../models.js");

const { Clients, Hotels, Reservations } = require("../models.js");
const { sequelize } = require("../models/index");

const HotelController = {};

//FIND HOTELS BY ID
HotelController.findByPk = (req, res, next) => {
  try {
    const id = req.params.id;
    Hotels.findByPk(id, {
      include: [
        {
          model: Reservations,
          as: "Reservations",
          include: [
            {
              model: Clients,
              as: "client",
            },
          ],
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

//FIND ALL HOTELS

HotelController.getAll = async (req, res) => {
  try {
    const data = await Hotels.findAll({
      include: [
        {
          model: Reservations,
          as: "Reservations",
          include: [
            {
              model: Clients,
              as: "client",
            },
          ],
        },
      ],
    });
    if (data) {
      res.json(data);
    } else
      throw res.status(404).send({
        message: "The resource you are looking for doesn't exist",
      });
  } catch (error) {
    res.status(500).send({
      message: "Some error ocurred while retrieving the users.",
    });
  }
};

//Find hotels by Name
HotelController.getByName = async (req, res) => {
  const name = req.params.name;
  const data = await Hotels.findAll({
    where: {
      hotelname: { [Op.like]: `%${name}%` },
    },
    include: [
      {
        model: Reservations,
        as: "Reservations",
        include: [
          {
            model: Clients,
            as: "client",
          },
        ],
      },
    ],
  });
  res.json(data);
};

module.exports = HotelController;
