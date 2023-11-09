const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  contactInfo: {
    type: String,
  },
  medicalHistory: {
    type: String,
  },
  specialty: {
    type: String,
  },
  education: {
    type: String,
  },
  availableHours: {
    type: [String],
  },
  // Other fields specific to doctors (if needed)
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
