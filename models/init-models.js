const DataTypes = require("sequelize").DataTypes;
const _Clients = require("./Clients");
const _Hotels = require("./Hotels");
const _Reservations = require("./Reservations");

function initModels(sequelize) {
  const Clients = _Clients(sequelize, DataTypes);
  const Hotels = _Hotels(sequelize, DataTypes);
  const Reservations = _Reservations(sequelize, DataTypes);

  Reservations.belongsTo(Clients, { as: "client", foreignKey: "clientId"});
  Clients.hasMany(Reservations, { as: "Reservations", foreignKey: "clientId"});
  Reservations.belongsTo(Hotels, { as: "hotel", foreignKey: "hotelId"});
  Hotels.hasMany(Reservations, { as: "Reservations", foreignKey: "hotelId"});

  return {
    Clients,
    Hotels,
    Reservations,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
