const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Doctor extends Model {}
Doctor.init(
  {
    doctorId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    firstName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    phoneNumber: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    website: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    address: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    specialization: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    experience: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      feePerCunsultation: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      timings: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(),
        defaultValue: "pending",
      },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Doctor;
