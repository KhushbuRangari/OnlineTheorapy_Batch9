const ClinicStaff = require("../models/ClinicStaff.model");
const bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(6);
const jwt = require("jsonwebtoken");

// Create a new clinic staff member
exports.createClinicStaff = async (req, res) => {
  try {
    const { username, password, role, name, email, shift, department } =
      new ClinicStaff(req.body);

    if (username == "" || email == "" || password == "") {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }

    const registeredStaff = await ClinicStaff.create({
      username,
      password: await bcrypt.hash(password, salt),
      role,
      name,
      email,
      shift,
      department,
    });
    const token = jwt.sign(
      { id: registeredStaff._id },
      process.env.JWT_SCRETEKEY,
      {
        expiresIn: "24h",
      }
    );
    res.status(200).json({
      message: `Staff registered`,
      success:true,
      registeredStaff,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create clinic staff member" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  
  try {
    if (email == "" || password == "") {
      return res.status(404).json({
        message: "Please fill all fields",
      });
    }

 
    const staff = await ClinicStaff.find({ email });

    // console.log(user.length);
    if (staff.length == 0) {
      return res.status(400).json({
        message: `staff dose not exist , please register`,
      });
    }

    if (staff.length > 0 && staff[0].password) {
      if (await bcrypt.compare(password, staff[0].password)) {
        const token = jwt.sign(
          { id: staff[0]._id },
          process.env.JWT_SCRETEKEY,
          {
            expiresIn: "24h",
          }
        );
        return res.status(200).json({
          staff,
          token,
        });
      }
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: `Something went wrong ${error.message}`,
    });
  }
};

// Get a list of all clinic staff members
exports.getAllClinicStaff = async (req, res) => {
  try {
    const clinicStaff = await ClinicStaff.find();
    res.status(200).json(clinicStaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch clinic staff members" });
  }
};

// Get details of a specific clinic staff member by ID
exports.getClinicStaffById = async (req, res) => {
  const staffId = req.params.id;
  try {
    const clinicStaff = await ClinicStaff.findById(staffId);
    if (!clinicStaff) {
      res.status(404).json({ error: "Clinic staff member not found" });
    } else {
      res.status(200).json(clinicStaff);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch clinic staff member" });
  }
};

// Update details of a clinic staff member
exports.updateClinicStaff = async (req, res) => {
  const staffId = req.params.id;
  try {
    const updatedClinicStaff = await ClinicStaff.findByIdAndUpdate(
      staffId,
      req.body,
      { new: true }
    );
    if (!updatedClinicStaff) {
      res.status(404).json({ error: "Clinic staff member not found" });
    } else {
      res.status(200).json(updatedClinicStaff);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update clinic staff member" });
  }
};

// Delete a clinic staff member by ID
exports.deleteClinicStaff = async (req, res) => {
  const staffId = req.params.id;

  // console.log(staffId);
  try {
    const deletedClinicStaff = await ClinicStaff.findByIdAndDelete(staffId);
    if (!deletedClinicStaff) {
      res.status(404).json({ error: "Clinic staff member not found" });
    } else {
      res.status(200).json(deletedClinicStaff);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete clinic staff member" });
  }
};
