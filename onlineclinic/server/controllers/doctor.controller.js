const Doctor = require('../models/Doctor.model');

// Create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    const savedDoctor = await doctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a doctor' });
  }
};

// Get a list of all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
};

// Get details of a specific doctor by ID
exports.getDoctorById = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ error: 'Doctor not found' });
    } else {
      res.status(200).json(doctor);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch doctor' });
  }
};

// Update details of a doctor
exports.updateDoctor = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, req.body, { new: true });
    if (!updatedDoctor) {
      res.status(404).json({ error: 'Doctor not found' });
    } else {
      res.status(200).json(updatedDoctor);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update doctor' });
  }
};

// Delete a doctor by ID
exports.deleteDoctor = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
    if (!deletedDoctor) {
      res.status(404).json({ error: 'Doctor not found' });
    } else {
      res.status(200).json(deletedDoctor);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete doctor' });
  }
};
