const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");

module.exports = {
  createAdmin: async (body) => {
    try {
      body.adminId = uuid();
      const admin = await userModel.createAdmin(body);
      if (admin.error) {
        return {
          error: admin.error,
        };
      }
      return {
        response: admin.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updatedocstatusbyAdmin: async (body) => {
    try {
      const updatedocstatusbyAdmin = await userModel.updatedocstatusbyAdmin(body,body.adminId,body.doctorId);
      if (updatedocstatusbyAdmin.error) {
        return {
          error: updatedocstatusbyAdmin.error,
        };
      }
      return {
        response: updatedocstatusbyAdmin.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAdminWithDoc: async () => {
    try {
      const admin = await userModel.getAdminWithDoc();
      if (admin.error) {
        return {
          error: admin.error,
        };
      }
      return {
        response: admin.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAdmin: async () => {
    try {
      const admin = await userModel.getAdmin();
      if (admin.error) {
        return {
          error: admin.error,
        };
      }
      return {
        response: admin.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateAdmin: async (body) => {
    try {
      const updatedAdmin = await updateAdmin(body, body.adminId);
      if (updatedAdmin.error) {
        return { error: updatedAdmin.error };
      }
      return {
        response: updatedAdmin.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  deleteAdmin: async (query) => {
    try {
      const deletedAdmin = await userModel.deleteAdmin(query.adminId);
      if (deletedAdmin.error) {
        return {
          error: deletedAdmin.error,
        };
      }
      return {
        response: deletedAdmin.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

};
