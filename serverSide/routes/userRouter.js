const routes = require("express").Router();
const {
 
  Signup,
  createRole,
  logInUser,
  getRole,
} = require("../controller/userController");

routes.post("/logInUser", logInUser);
routes.post("/signup", Signup);
routes.post("/createRole", createRole);
routes.get("/getRole", getRole);

module.exports = routes;
