const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { query } = require("express");
const { v4: uuid } = require("uuid");

module.exports = {
  createRole: async (body) => {
    try {
      body.roleId = uuid();
      const role = await userModel.createRole(body);
      if (role.error) {
        return {
          error: role.error,
        };
      }
      return {
        response: role.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getRole: async () => {
    try {
      const role = await userModel.getRole();
      if (role.error) {
        return {
          error: role.error,
        };
      }
      return {
        response: role.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  Signup: async (body) => {
    try {
      console.log(body.roleId)
      const role = {
        SignupId: uuid(),
        userName: body.userName,
        email: body.email,
        password: await hash(body.password, 10),
        roleId: body.roleId,
      };
      const signup = await userModel.Signup(role);

      if (signup.error) {
        return {
          error: signup.error,
          message:"error part from service"
        };
      }
      return {
        response: signup.response,
      };
    } catch (error) {
      return {
        error: error.message,
        message:"error part from service catch"
      };
    }
  },
  loginUser: async (body) => {
    try {
        const logInuser = await userModel.logInUser(body);
        console.log("logion",logInuser.response)
        if (logInuser.error) {
            return {
                error: logInuser.error,
                message:"userName  is invalid "
            };
        }
        
        delete logInuser.response.dataValues.password;
        return {
            response: logInuser.response,
            message:"user service after delete pass"
        }           
        
    } catch (error) {
        return {
            error: error.message,
            
            message:"user service catch"
        };
    }
},

};
