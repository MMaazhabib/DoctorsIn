const routes = require("express").Router();
const {
  
  createPatient,
  getAllPatient,
  updatePatient,
  deletePatient,
  
} = require("../controller/patientController");




routes.post("/createPatient", createPatient);
routes.get("/getAllPatient", getAllPatient);
routes.patch("/updatePatient", updatePatient);
routes.delete("/deletePatient", deletePatient);


module.exports = routes;
