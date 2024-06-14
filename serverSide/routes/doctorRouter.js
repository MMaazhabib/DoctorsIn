const routes = require("express").Router();
const {
  
  createDoctor,
  getDoctor,
  updateDoctor,
  deleteDoctor,
  
} = require("../controller/doctorController");


routes.post("/createDoctor", createDoctor);
routes.get("/getDoctor", getDoctor);
routes.patch("/updateDoctor", updateDoctor);
routes.delete("/deleteDoctor", deleteDoctor);

// routes.get("/getAllPatient", getAllPatient);
// routes.patch("/updatePatient", updatePatient);
// routes.delete("/deletePatient", deletePatient);

module.exports = routes;
