const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Patient',
    required: true,
  
  },
 doctorId: {
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Doctor',
    required: true,
  
  },
  status: {
    type: Boolean,
    required: true,
  },

  timing: {
    type: String
  },
  
}, {
  timestamps: true
});


const appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = appointment;
