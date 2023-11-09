const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const clinicStaffSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "nurse", "front_desk"],
    default: "front_desk",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  shift: {
    type: String,
    enum: ["morning", "afternoon", "night"],
  },
  department: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});


const ClinicStaff = mongoose.model("ClinicStaff", clinicStaffSchema);

module.exports = ClinicStaff;
