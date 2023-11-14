// routes/clinicStaffRoutes.js
const express = require('express');
const router = express.Router();
const {createAppointment,getAllAppointment,getAppointmentById,updateAppointment , deleteAppointment  } = require('../controllers/appointment.controller');

// Create a new Appointment
router.post('/api/create', createAppointment);

// Get a list of all Appointment members
router.get('/api/all', getAllAppointment);

// Get details of a specific Appointment member by ID
router.get('/api/getbyId/:id',getAppointmentById);

// Update details of a Appointment member
router.put('/api/update/:id',updateAppointment);

// Delete a Appointment  by ID
router.delete('/api/delete/:id', deleteAppointment);

module.exports = router;
