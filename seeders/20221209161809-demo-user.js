"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          name: "John",
          surname: "Doe",
          phone: 645634737,
          email: "johnny28@gmail.com",
          dni: "48488367V",
        },
        {
          name: "Maria",
          surname: "Marieta",
          phone: 642345737,
          email: "marieta@gmail.com",
          dni: "48484396V",
        },
        {
          name: "Pepo",
          surname: "Palotes",
          phone: 643844573,
          email: "palotes84@gmail.com",
          dni: "48234566V",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Clients",
      [
        {
          name: "John",
          surname: "Doe",
          phone: 645634737,
          email: "johnny28@gmail.com",
          dni: "48488367V",
        },
        {
          name: "Maria",
          surname: "Marieta",
          phone: 642345737,
          email: "marieta@gmail.com",
          dni: "48484396V",
        },
        {
          name: "Pepo",
          surname: "Palotes",
          phone: 643844573,
          email: "palotes84@gmail.com",
          dni: "48234566V",
        },
      ],
      {}
    );
  },

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Hotels",
      [
        {
          hotelname: "HOTEL SOFIA",
          price: 200,
        },
        {
          hotelname: "HOTEL ARTS",
          price: 300,
        },
        {
          hotelname: "HOTEL HOLA",
          price: 200,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Hotels",
      [
        {
          hotelname: "HOTEL SOFIA",
          price: 200,
        },
        {
          hotelname: "HOTEL ARTS",
          price: 300,
        },
        {
          hotelname: "HOTEL HOLA",
          price: 200,
        },
      ],
      {}
    );
  },
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reservations",
      [
        {
          clientId: 5,
          hotelId: 4,
          checkin: "2021-11-10",
          checkout: "2021-12-2",
        },
        {
          clientId: 6,
          hotelId: 5,
          checkin: "2021-1-20",
          checkout: "2021-1-22",
        },
        {
          clientId: 7,
          hotelId: 6,
          checkin: "2021-1-20",
          checkout: "2021-1-23",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Hotels",
      [
        {
          clientId: 5,
          hotelId: 4,
          checkin: "2021-11-10",
          checkout: "2021-12-2",
        },
        {
          clientId: 6,
          hotelId: 5,
          checkin: "2021-1-20",
          checkout: "2021-1-22",
        },
        {
          clientId: 7,
          hotelId: 6,
          checkin: "2021-1-20",
          checkout: "2021-1-23",
        },
      ],
      {}
    );
  },
};
