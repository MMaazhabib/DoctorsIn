const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Signup extends Model {}

Signup.init(
  {
    SignupId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      unique: true,
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);

module.exports = Signup;
