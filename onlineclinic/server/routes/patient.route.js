const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

// Create a new patient
router.post('/api/create', patientController.createPatient);

// login patient
router.post('/api/login', patientController.login);

// Get a list of all patients
router.get('/api/all', patientController.getAllPatients);

// Get details of a specific patient by ID
router.get('/api/getbyId/:id', patientController.getPatientById);

// Update details of a patient
router.put('/api/update/:id', patientController.updatePatient);

// Delete a patient by ID
router.delete('/api/delete/:id', patientController.deletePatient);

module.exports = router;
