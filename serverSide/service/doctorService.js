const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { query } = require("express");
const { v4: uuid } = require("uuid");

module.exports = {

  createDoctor: async (body) => {
    try {
      body.doctorId = uuid();
      const doctor = await userModel.createDoctor(body);
      if (doctor.error) {
        return {
          error: doctor.error,
        };
      }
      return {
        response: doctor.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getDoctor: async (query) => {
    try {
      const doctor = await userModel.getDoctor(query.doctorId);
      if (doctor.error) {
        return {
          error: doctor.error,
        };
      }
      return {
        response: doctor.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateDoctor: async (body) => {
    try {
      const updatedDoctor = await userModel.updateDoctor(body, body.doctorId);
      if (updatedDoctor.error) {
        return { error: updatedDoctor.error };
      }
      return {
        response: updatedDoctor.response,
      };
    } catch (error) {
      return { error: error.message };
    }
  },
  deleteDoctor: async (query) => {
    try {
      const deletedDoctor = await userModel.deletedDoctor(query.doctorId);
      if (deletedDoctor.error) {
        return {
          error: deletedDoctor.error,
        };
      }
      return {
        response: deletedDoctor.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
