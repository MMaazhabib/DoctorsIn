const doctorservice = require("../service/doctorservice");
const joi = require("joi");

const createDoctorSchema = joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().required(),
  phoneNumber: joi.string().required(),
  website: joi.string().required(),
  address: joi.string().required(),
  specialization: joi.string().required(),
  experience: joi.string().required(),
  feePerCunsultation: joi.string().required(),
  timings: joi.string().required(),
  status: joi.string().required(),
  

});
const getDoctorSchema = joi.object().keys({
  doctorId: joi.string().required(),
});

const updateDoctorSchema = joi.object().keys({
  doctorId: joi.string().required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().required(),
  phoneNumber: joi.string().required(),
  website: joi.string().required(),
  address: joi.string().required(),
  specialization: joi.string().required(),
  experience: joi.string().required(),
  feePerCunsultation: joi.string().required(),
  timings: joi.string().required(),
  status: joi.string().required(),
});
const deleteDoctorSchema = joi.object().keys({
  doctorId: joi.array().required(),
});


module.exports = {
  createDoctor: async (req, res) => {
    try {
      const validate = await createDoctorSchema.validateAsync(req.body);
      const doctor = await doctorservice.createDoctor(validate);
      if (doctor.error) {
        return res.send({
          error: doctor.error,
          message:"usercontroller error createdoc"
        });
      }
      return res.send({
        response: doctor.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
        message:"usercontroller catch error"
      });
    }
  },
  getDoctor: async (req, res) => {
    try {
      const validate = await getDoctorSchema.validateAsync(req.query);
      const doctor = await doctorservice.getDoctor(validate);
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
  updateDoctor: async (req, res) => {
    try {
      const validate = await updateDoctorSchema.validateAsync(req.body);
      const updatedDoctor = await doctorservice.updateDoctor(validate);
      if (updatedDoctor.error) {
        return res.send({ error: updatedDoctor.error });
      }
      return res.send({
        response: updatedDoctor.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
  deleteDoctor: async (req, res) => {
    try {
      const validate = await deleteDoctorSchema.validateAsync(req.query);
      const deletedDoctor = await doctorservice.deleteDoctor(validate);
      if (deletedDoctor.error) {
        return res.send({
          error: deletedDoctor.error,
        });
      }
      return res.send({
        response: deletedDoctor.response,
      });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },

};
