const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Admin extends Model {}
Admin.init(
  {
    adminId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    email: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    adminName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Admin;
