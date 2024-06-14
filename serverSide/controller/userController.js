const userService = require("../service/userService");
const joi = require("joi");

const createRoleSchema = joi.object().keys({
  roleName: joi.string().required(),
  });
const loginUserSchema = joi.object().keys({

  userName: joi.string().required(),
  password: joi.string().required(),
})
const createSignupSchema = joi.object().keys({
  userName: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  roleId: joi.string().required(),
});
const getRoleSchema = joi.object().keys({
  roleName: joi.string().required(),
});

module.exports = {
  createRole: async (req, res) => {
    try {
      const validate = await createRoleSchema.validateAsync(req.body);
      const role = await userService.createRole(validate);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      return res.send({
        response: role.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  Signup: async (req, res) => {
    try {
      const validate = await createSignupSchema.validateAsync(req.body);
      const signup = await userService.Signup(validate);
      console.log(signup)
      if (signup.error) {
        return res.send({
          error: signup.error,
          message:"error part from controller"
        });
      }
      return res.send({
        response: signup.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
        
        message:"error part from controller catch"
      });
    }
  },
  logInUser: async (req, res) => {
    try {
        console.log("before valiadte")
        console.log("req.body is",req.body)
        const validate = await loginUserSchema.validateAsync(req.body);

        console.log("b/w valiadte")
        const logInUser = await userService.loginUser(validate);
        console.log(logInUser)
        console.log("after login user variable valiadte")

        if (logInUser.error) {

            return res.send({
                error: logInUser.error,
                message: "Wrong username or passward controller"
            });
        }
        
        return res.send({
            
            response: logInUser.response,
            message: "login controller"

        })
    } catch (error) {
        return res.send({
            error: error.message,
            message:"usercontroller catch"
        });
    }
},

getRole: async (req, res) => {
  try {
    const validate = await getRoleSchema.validateAsync();
    const admin = await userService.getRole(validate);
    if (admin.error) {
      return res.send({
        error: admin.error,
      });
    }
    return res.send({
      response: admin.response,
    });
  } catch (error) {
    return res.send({
      error: error.message,
    });
  }
},
};
