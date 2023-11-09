const Medicine = require('../models/medicine.model');

// Populate mock data for medicines
exports.populateMockData = async (req, res) => {
  try {
  
    const mockMedicines = new Medicine(req.body);
    // console.log(req.body);
    const insertedMedicine = await mockMedicines.save()

    res.status(201).json(insertedMedicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to populate mock data' });
  }
};

// Get a list of all medicines
exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch medicines' });
  }
};

// Search for medicines by name, chemical composition, or dosage
exports.searchMedicines = async (req, res) => {
  const searchQuery = req.query.search;


  try {
    const medicines = await Medicine.find({
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { chemicalComposition: { $regex: searchQuery, $options: 'i' } },
        { dosage: { $regex: searchQuery, $options: 'i' } },
      ],
    });
    res.status(200).json(medicines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to search for medicines' });
  }
};
