const { models } = require("./index");
const bcrypt = require("bcryptjs");

module.exports = {
  createRole: async (body) => {
    try {
      const role = await models.Role.create({ ...body });
      return {
        response: role,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getRole: async () => {
    try {
      const getrole = await models.Role.findAll({});
      return {
        response: getrole,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  Signup: async (body) => {
    try {
      const signup = await models.SignUp.create({ ...body });
      return {
        response: signup,
      };
    } catch (error) {
      return {
        error: error.message,
        
        message:"error part from model catch"
      };
    }
  },
  logInUser: async (body) => {
    try {
      const { userName, password } = body;

      const user = await models.SignUp.findOne({ where: { userName } });

      const validPassword = await bcrypt.compare(password, user.password);
      console.log(user.password, password);
      if (!validPassword) {
        return {
          message: "wrong passward model",
        };
      }
      return {
        response: user,
        message: "login model",
      };
    } catch (error) {
      return {
        error: error.message,
        message: "model",
      };
    }
  },
  createAdmin: async (body) => {
    try {
      const admin = await models.Admin.create({ ...body });
      return {
        response: admin,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updatedocstatusbyAdmin:async (body,doctorId)=>{
    try {
      const updatedDoctor = await models.Admin.update(
        {
          ...body
        },
        {
          where: {
            doctorId: doctorId,
          },
        }
      );
      return {
        response: updatedDoctor,
      };
    } catch (error) {
      return { error: error.message };
    }

  },
  getAdminWithDoc: async () => {
    try {
      const adminWithDoc = await models.Doctor.findAll({
      });
      return {
        response: adminWithDoc,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAdmin: async () => {
    try {
      const admin = await models.Admin.findAll({});
      return {
        response: admin,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateAdmin: async (body, adminId) => {
    try {
      const updatedAdmin = await models.Admin.update(
        {
          ...body,
        },
        {
          where: {
            adminId: adminId,
          },
        }
      );
      return {
        response: updatedAdmin,
      };
    } catch (error) {
      return { error: error.message };
    }
  },

  deleteAdmin: async (adminId) => {
    try {
      const deletedAdmin = await models.Admin.destroy({
        where: {
          adminId: adminId,
        },
      });
      return {
        response: deletedAdmin,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  createDoctor: async (body) => {
    try {
      const doctor = await models.Doctor.create({ ...body });
      return {
        response: doctor,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getDoctor: async (doctorId) => {
    try {
      const doctor = await models.Doctor.findOne({
        where: {
          doctorId: doctorId,
        },
      });
      return {
        response: doctor,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateDoctor: async (body, doctorId) => {
    try {
      const updatedDoctor = await models.Doctor.update(
        {
          ...body,
        },
        {
          where: {
            doctorId: doctorId,
          },
        }
      );
      return {
        response: updatedDoctor,
      };
    } catch (error) {
      return { error: error.message };
    }
  },

  deleteDoctor: async (adminId) => {
    try {
      const deletedDoctor = await models.Doctor.destroy({
        where: {
          doctorId: doctorId,
        },
      });
      return {
        response: deletedDoctor,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  createPatient: async (body) => {
    try {
      const createdPatient = await models.Patient.create({ ...body });
      return {
        response: createdPatient,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  getAllPatient: async () => {
    try {
      const patient = await models.Patient.findAll({
        attributes: ["patientId", "patientName"],
      });
      return {
        response: patient,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  getPatientByPatientName: async (patientName) => {
    try {
      const patient = await models.Patient.findOne({
        where: {
          patientName: patientName,
        },
      });
      return {
        response: patient,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updatePatient: async (body, patientId) => {
    try {
      const updatedPatient = await models.Patient.update(
        {
          ...body,
        },
        {
          where: {
            patientId: patientId,
          },
        }
      );
      return {
        response: updatedPatient,
      };
    } catch (error) {
      return { error: error.message };
    }
  },

  deletePatient: async (patientId) => {
    try {
      const deletedPatient = await models.Patient.destroy({
        where: {
          patientId: patientId,
        },
      });
      return {
        response: deletedPatient,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
