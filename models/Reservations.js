const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Reservations.init(sequelize, DataTypes);
}

class Reservations extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    reservationId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clients',
        key: 'clientId'
      }
    },
    hotelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hotels',
        key: 'hotelId'
      }
    },
    checkin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    checkout: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Reservations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reservationId" },
        ]
      },
      {
        name: "clientId",
        using: "BTREE",
        fields: [
          { name: "clientId" },
        ]
      },
      {
        name: "hotelId",
        using: "BTREE",
        fields: [
          { name: "hotelId" },
        ]
      },
    ]
  });
  }
}
