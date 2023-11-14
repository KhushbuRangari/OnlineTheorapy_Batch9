const Appointment = require('../models/appointment.model');

// Create a new appointment
exports.createAppointment= async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    const appointmentSaved = await appointment.save();
    res.status(201).json(appointmentSaved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a appointment' });
  }
};

// Get a list of all doctors
exports.getAllAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.find();
    res.status(200).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Appointment' });
  }
};

// Get details of a specific appointment by ID
exports.getAppointmentById = async (req, res) => {
  const appointmentId = req.params.id;
  try {
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      res.status(404).json({ error: 'Appointment not found' });
    } else {
      res.status(200).json(appointment);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch appointment' });
  }
};

// Update details of a appointment
exports.updateAppointment= async (req, res) => {
  const appointmentId = req.params.id;
  try {
    const updatedAppointment= await Appointment.findByIdAndUpdate(appointmentId, req.body, { new: true });
    if (!updatedAppointment) {
      res.status(404).json({ error: 'Appointment not found' });
    } else {
      res.status(200).json(updatedAppointment);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update appointment' });
  }
};

// Delete a appointment by ID
exports.deleteAppointment = async (req, res) => {
  const appointmentId = req.params.id;
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);
    if (!deletedAppointment) {
      res.status(404).json({ error: 'Appointment not found' });
    } else {
      res.status(200).json(deletedAppointment);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
};
