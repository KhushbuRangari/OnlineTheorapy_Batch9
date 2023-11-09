const express = require('express');
const router = express.Router();
const {createDoctor,getAllDoctors,getDoctorById,updateDoctor,deleteDoctor} = require('../controllers/doctor.controller');

// Create a new doctor
router.post('/api/create', createDoctor);

// {
//     "name": "Dr. John Smith",
//     "dateOfBirth": "1978-11-30",
//     "contactInfo": "john.smith@example.com",
//     "medicalHistory": "Orthopedic Surgeon with 18 years of experience",
//     "specialty": "Orthopedics",
//     "education": "M.D. in Orthopedics, University of Medical Sciences",
//     "availableHours": ["Wednesday 9 AM - 1 PM", "Friday 2 PM - 6 PM"]
//   }
  

// Get a list of all doctors
router.get('/api/all', getAllDoctors);

// Get details of a specific doctor by ID
router.get('/api/getbyId/:id',getDoctorById);

// Update details of a doctor
router.put('/api/update/:id', updateDoctor);

// Delete a doctor by ID
router.delete('/api/delete/:id', deleteDoctor);

module.exports = router;
