const Patient = require('../models/Patient.model');
const bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(6);
const jwt = require("jsonwebtoken");

// Create a new patient
exports.createPatient = async (req, res) => {
  try {

    const { username, password, dateOfBirth, name, email, lastAppointment}=req.body;
    const patient = new Patient(req.body);

    const newPatient = await Patient.create({
      username,
      password: await bcrypt.hash(password, salt),
      dateOfBirth,
      name,
      email,
      lastAppointment,
    
    });

    const token = jwt.sign(
      { id: newPatient._id },
      process.env.JWT_SCRETEKEY,
      {
        expiresIn: "24h",
      }
    );
    res.status(200).json({
      message: `Staff registered`,
      success:true,
      newPatient,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a patient' });
  }
};

exports.login = async (req, res) => {
  const { email,password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  console.log(email);
  try {
    if (email == "" || password == "") {
      return res.status(404).json({
        message: "Please fill all fields",
      });
    }

 
    const patient = await Patient.find({ email });

    // console.log(user.length);
    if (patient.length == 0) {
      return res.status(400).json({
        message: `staff dose not exist , please register`,
      });
    }

    if (patient.length > 0 && patient[0].password) {
      if (await bcrypt.compare(password, patient[0].password)) {
        const token = jwt.sign(
          { id: patient[0]._id },
          process.env.JWT_SCRETEKEY,
          {
            expiresIn: "24h",
          }
        );
        return res.status(200).json({
          patient,
          token,
        });
      }
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: `Something went wrong ${error.message}`,
    });
  }
};






// Get a list of all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

// Get details of a specific patient by ID
exports.getPatientById = async (req, res) => {
  const patientId = req.params.id;
  try {
    const patient = await Patient.findById(patientId);
    if (!patient) {
      res.status(404).json({ error: 'Patient not found' });
    } else {
      res.status(200).json(patient);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch patient' });
  }
};

// Update details of a patient
exports.updatePatient = async (req, res) => {
  const patientId = req.params.id;
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(patientId, req.body, { new: true });
    if (!updatedPatient) {
      res.status(404).json({ error: 'Patient not found' });
    } else {
      res.status(200).json(updatedPatient);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update patient' });
  }
};

// Delete a patient by ID
exports.deletePatient = async (req, res) => {
  const patientId = req.params.id;
  try {
    const deletedPatient = await Patient.findByIdAndDelete(patientId);
    if (!deletedPatient) {
      res.status(404).json({ error: 'Patient not found' });
    } else {
      res.status(200).json(deletedPatient);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete patient' });
  }
};
