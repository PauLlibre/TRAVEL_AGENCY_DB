const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Clients.init(sequelize, DataTypes);
}

class Clients extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    clientId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING(9),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Clients',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clientId" },
        ]
      },
    ]
  });
  }
}
