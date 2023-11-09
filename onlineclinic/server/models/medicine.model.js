const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  chemicalComposition: {
    type: String,
  },
  dosage: {
    type: String,
  },
  // Add other fields specific to medicines
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
