// routes/clinicStaffRoutes.js
const express = require('express');
const router = express.Router();
const clinicStaffController = require('../controllers/clinicStaff.controller');

// Create a new clinic staff member
router.post('/api/create', clinicStaffController.createClinicStaff);
// Sample Json for requestAnimationFrame.body
// {"username": "staff123",
//   "password": "password123",
//   "role": "front_desk",
//   "name": "John Smith",
//   "contact": "john.smith@example.com",
//   "shift": "morning",
//   "department": "reception"}


// login staff
router.post('/api/login', clinicStaffController.login);


// Get a list of all clinic staff members
router.get('/api/all', clinicStaffController.getAllClinicStaff);

// Get details of a specific clinic staff member by ID
router.get('/api/getbyId/:id', clinicStaffController.getClinicStaffById);

// Update details of a clinic staff member
router.put('/api/update/:id', clinicStaffController.updateClinicStaff);

// Delete a clinic staff member by ID
router.delete('/api/delete/:id', clinicStaffController.deleteClinicStaff);

module.exports = router;
