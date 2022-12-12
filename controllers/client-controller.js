const { Op } = require("sequelize");

const { Clients, Hotels, Reservations } = require("../models.js");
const { sequelize } = require("../models/index");

const ClientController = {};

//Find client by Id
ClientController.findByPk = (req, res, next) => {
  try {
    const id = req.params.id;
    Clients.findByPk(id, {
      include: [
        {
          model: Reservations,
          as: "Reservations",
          include: [
            {
              model: Hotels,
              as: "hotel",
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

//Find All clients
ClientController.getAll = async (req, res) => {
  try {
    const data = await Clients.findAll({
      include: [
        {
          model: Reservations,
          as: "Reservations",
          include: [
            {
              model: Hotels,
              as: "hotel",
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

//Find client by Name
ClientController.getByName = async (req, res) => {
  const name = req.params.name;
  const data = await Clients.findAll({
    where: {
      name: { [Op.like]: `%${name}%` },
    },
    include: [
      {
        model: Reservations,
        as: "Reservations",
        include: [
          {
            model: Hotels,
            as: "hotel",
          },
        ],
      },
    ],
  });
  if (data.length > 0) {
    res.json(data);
  } else {
    throw {
      message: "There's nothing here",
    };
  }
};

//Find client by DNI
ClientController.getByDni = async (req, res) => {
  const dni = req.params.dni;
  const data = await Clients.findAll({
    where: {
      dni: { [Op.like]: `%${dni}%` },
    },
    include: [
      {
        model: Reservations,
        as: "Reservations",
        include: [
          {
            model: Hotels,
            as: "hotel",
          },
        ],
      },
    ],
  });

  if (data.length > 0) {
    res.json(data);
  } else {
    throw {
      message: "There's nothing here",
    };
  }
};

//Find client by phone
ClientController.getByPhone = async (req, res) => {
  const phone = req.params.phone;
  const data = await Clients.findAll({
    where: {
      phone: { [Op.like]: `%${phone}%` },
    },
    include: [
      {
        model: Reservations,
        as: "Reservations",
        include: [
          {
            model: Hotels,
            as: "hotel",
          },
        ],
      },
    ],
  });

  if (data.length > 0) {
    res.json(data);
  } else {
    throw {
      message: "There's nothing here",
    };
  }
};

//Find client by email
ClientController.getByMail = async (req, res) => {
  const email = req.params.email;
  const data = await Clients.findAll({
    where: {
      email: { [Op.like]: `%${email}%` },
    },
    include: [
      {
        model: Reservations,
        as: "Reservations",
        include: [
          {
            model: Hotels,
            as: "hotel",
          },
        ],
      },
    ],
  });

  if (data.length > 0) {
    res.json(data);
  } else {
    throw {
      message: "There's nothing here",
    };
  }
};

module.exports = ClientController;
