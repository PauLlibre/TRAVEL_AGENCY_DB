const initModels = require("./models/init-models");
const { sequelize } = require("./models/");

const models = initModels(sequelize);

module.exports = models;
