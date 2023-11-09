const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicine.controller');

// Populate mock data for medicines
router.post('/api/create', medicineController.populateMockData);

// Get a list of all medicines
router.get('/api/all', medicineController.getAllMedicines);

// Search for medicines by name or chemical composition
router.get('/api/search', medicineController.searchMedicines);

module.exports = router;
