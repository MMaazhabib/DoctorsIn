const routes = require("express").Router();
const {
  createAdmin,
  getAdmin,
  getAdminWithDoc,
  updatedocstatusbyAdmin,
  updateAdmin,
  deleteAdmin,
  
} = require("../controller/adminController");

routes.post("/createAdmin", createAdmin);
routes.get("/getAdmin", getAdmin);
routes.patch("/updateAdmin", updateAdmin);
routes.get("/getAdmin", deleteAdmin);

routes.get("/getAdminWithDoc", getAdminWithDoc);
routes.patch("/updatedocstatusbyAdmin", updatedocstatusbyAdmin);




module.exports = routes;
