import React from "react";
import { useLocation } from "react-router-dom";

function DoctorProfile() {
  const location = useLocation();
  const doctorData = location.state?.some;
  console.log(doctorData, "Doctor Profile");
  if (!doctorData) {
    // Handle the case where data is not available
    return (
      <div>
        <h3>No doctor data available</h3>
      </div>
    );
  }

  return (
    <div>
      <div className="container-fluid docProfile">
   
          <div className="col-4 content">
            <h4>Doctor Profile</h4>
            <hr />
            <h2> {doctorData.name}</h2>
            <p>{doctorData.education}  {doctorData.specialty}</p>
            <p> {doctorData.medicalHistory}</p>
            <p>Available Hours:  {doctorData.availableHours}</p>
            <p>{`${doctorData.name} is a specialized ${doctorData.specialty} has an experience ${doctorData.medicalHistory}. `} 
            {`${doctorData.name} is a specialized ${doctorData.specialty} has an experience ${doctorData.medicalHistory}. `} </p>
          </div>
   
      </div>
    </div>
  );
}

export default DoctorProfile;
