const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Patient extends Model {}
Patient.init(
  {
    patientId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    email: {
        unique: true,
        type: DataTypes.STRING(),
        allowNull: false,
      },
    patientName: {
      unique: true,
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
module.exports = Patient;
