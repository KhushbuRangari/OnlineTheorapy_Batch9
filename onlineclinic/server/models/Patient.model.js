const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  email: {
    type: String,
  },
  lastAppointment: {
    type: Date,
  },
  // Other fields specific to patients
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
