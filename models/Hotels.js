const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Hotels.init(sequelize, DataTypes);
}

class Hotels extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hotelId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hotelname: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Hotels',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hotelId" },
        ]
      },
    ]
  });
  }
}
