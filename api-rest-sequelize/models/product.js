const { DataTypes } = require("sequelize");
const sequelize = require("../infra/connection");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  price: {
    type: DataTypes.REAL,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER
  }
}, {
  createdAt: false,
  updatedAt: false
});

module.exports = Product;
