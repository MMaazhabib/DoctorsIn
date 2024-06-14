const patientService = require("../service/patientService");
const userService = require("../service/patientService");
const joi = require("joi");

const createPatientSchema = joi.object().keys({
  email: joi.string().required(),
  patientName: joi.string().required(),
  password: joi.string().required(),
  doctorId: joi.string().required(),
});
const getPatientSchema = joi.object().keys({
  patientName: joi.string().required(),
});
const updatePatientSchema = joi.object().keys({
  patientId: joi.string().required(),
  patientName: joi.string().required(),
});
const deletePatientSchema = joi.object().keys({
  patientId: joi.string().required(),
});

module.exports = {

  createPatient: async (req, res) => {
    try {
      const validate = await createPatientSchema.validateAsync(req.body);
      const createdPatient = await patientService.createPatient(validate);
      if (createdPatient.error) {
        return res.send({
          error: createdPatient.error,
        });
      }
      return res.send({
        response: createdPatient.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllPatient: async (req, res) => {
    try {
      const validate = await getPatientSchema.validateAsync();
      const patient = await patientService.getAllPatient(validate);
      if (patient.error) {
        return res.send({
          error: patient.error,
        });
      }
      return res.send({
        response: patient.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  updatePatient: async (req, res) => {
    try {
      const validate = await updatePatientSchema.validateAsync(req.body);
      const updatedPatient = await patientService.updatePatient(validate);
      if (updatedPatient.error) {
        return res.send({ error: updatedPatient.error });
      }
      return res.send({
        response: updatedPatient.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  deletePatient: async (req, res) => {
    try {
      const validate = await deletePatientSchema.validateAsync(req.query);
      const deletedPatient = await patientService.deletePatient(validate);
      if (deletedPatient.error) {
        return res.send({
          error: deletedPatient.error,
        });
      }
      return res.send({
        response: deletedPatient.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
