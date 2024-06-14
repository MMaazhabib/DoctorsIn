const sequelize = require("../bin/dbConnection");
const Admin = require("./definitions/admin");
const Doctor = require("./definitions/doctor");
const Patient = require("./definitions/patient");
const SignUp = require("./definitions/signup");
const Role = require("./definitions/role");

//Relations Starts Here

//doctor has only one admin
// Doctor.hasOne(Admin, {foreignKey: "doctorId"});
// Admin.belongsTo(Doctor, {foreignKey: "doctorId"});

//patient has only one admin
// Patient.hasOne(Admin, {foreignKey: "patientId"});
// Admin.belongsTo(Patient, {foreignKey: "patientId"});

//admin has many doctor & doctor has a admin
Admin.hasMany(Doctor, { foreignKey: "adminId" });
Doctor.belongsTo(Admin, { foreignKey: "adminId" });

//admin has many patient & patient has a admin
// Admin.hasMany(Patient, { foreignKey: "adminId" });
// Patient.belongsTo(Admin, { foreignKey: "adminId" });

//doctor has many patient & patient has a doctor
Doctor.hasMany(Patient, { foreignKey: "doctorId" });
Patient.belongsTo(Doctor, { foreignKey: "doctorId" });

//
Role.hasOne(SignUp, {foreignKey: "roleId"});
SignUp.belongsTo(Role, {foreignKey: "roleId"});

//Relations Ends Here

const models = {
  Admin,
  Doctor,
  Patient,
  SignUp,
  Role,
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
