const adminService = require("../service/adminService");
const joi = require("joi");

const createAdminSchema = joi.object().keys({
  email: joi.string().required(),
  adminName: joi.string().required(),
  password: joi.string().required(),
  doctorId:joi.string().required(),
  patientId:joi.string().required(),

});
const getAdminSchema = joi.object().keys({
  adminName: joi.string().required(),
});
const updatedocstatusbyAdminSchema = joi.object().keys({
  
  adminId:joi.string().required(),
  doctorId: joi.string().required(),
  status:joi.string().required(),
});
const updateAdminSchema = joi.object().keys({
  adminId: joi.string().required(),  
  adminName: joi.string().required(),
});
const deleteAdminSchema = joi.object().keys({
  adminId: joi.array().required(),
});



module.exports = {
  
  createAdmin: async (req, res) => {
    try {
      const validate = await createAdminSchema.validateAsync(req.body);
      const admin = await adminService.createAdmin(validate);
      
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
  getAdminWithDoc: async (req, res) => {
      try {
        const doctor = await adminService.getAdminWithDoc();
        console.log(req.query)
        if (doctor.error) {
          return res.send({
            error: doctor.error,
          });
        }
        return res.send({
          response: doctor.response,
        });
      } catch (error) {
        return res.send({
          error: error.message,
        });
      }
    
  },
  updatedocstatusbyAdmin: async (req, res) => {
    try {
      const validate = await updatedocstatusbyAdminSchema.validateAsync(req.body);
      const updatedocstatusbyAdmin = await adminService.updatedocstatusbyAdmin(validate);
      if (updatedocstatusbyAdmin.error) {
        return res.send({
          error: updatedocstatusbyAdmin.error,
        });
      }
      return res.send({
        response: updatedocstatusbyAdmin.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAdmin: async (req, res) => {
    try {
      const validate = await getAdminSchema.validateAsync();
      const admin = await adminService.getAdmin(validate);
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
  updateAdmin: async (req, res) => {
    try {
      const validate = await updateAdminSchema.validateAsync(req.body);
      const updatedAdmin = await adminService.updateAdmin(validate);
      if (updatedAdmin.error) {
        return res.send({ error: updatedAdmin.error });
      }
      return res.send({
        response: updatedAdmin.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  deleteAdmin: async (req, res) => {
    try {
      const validate = await deleteAdminSchema.validateAsync(req.query);
      const deletedAdmin = await adminService.deleteAdmin(validate);
      if (deletedAdmin.error) {
        return res.send({
          error: deletedAdmin.error,
        });
      }
      return res.send({
        response: deletedAdmin.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },

};
