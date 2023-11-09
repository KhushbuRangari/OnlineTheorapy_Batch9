const express= require('express');
const app = express();
const cors = require('cors');
app.use(cors())
require('dotenv').config();
app.use(express.json());
const PORT = process.env.PORT

const dbConnection = require('./DBConnection')
dbConnection();

// Import route files
const patientRoutes = require('./routes/patient.route');
const doctorRoutes = require('./routes/doctor.route');
const clinicStaffRoutes = require('./routes/clinicStaff.route');
const medicineRoutes = require('./routes/medicine.route');


// Use the routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/clinic-staff', clinicStaffRoutes);
app.use('/medicine', medicineRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})