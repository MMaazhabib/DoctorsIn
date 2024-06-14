const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { query } = require("express");
const { v4: uuid } = require("uuid");

module.exports = {


  createPatient: async (body) => {
    try {
      body.patientId=uuid();
      
      const createdPatient = await userModel.createPatient(body);
      if (createdPatient.error) {
        return { error: createdPatient.error };
      }
      delete createdPatient.response.dataValues.password;
      return {
        response: createdPatient.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },

  getAllPatient: async () => {
    try {
      const patient = await userModel.getAllPatient();
      if (patient.error) {
        return {
          error: patient.error,
        };
      }
      return {
        response: patient.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updatePatient: async (body) => {
    try {
      const updatedPatient = await userModel.updatePatient(body, body.patientId);
      if (updatedPatient.error) {
        return { error: updatedPatient.error };
      }
      return {
        response: updatedPatient.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  deletePatient: async (query) => {
    try {
      const deletedPatient = await userModel.deletePatient(query.patientId);
      if (deletedPatient.error) {
        return {
          error: deletedPatient.error,
        };
      }
      return {
        response: deletedPatient.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
