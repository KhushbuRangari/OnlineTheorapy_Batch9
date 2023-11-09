import axios from "axios";
import React, { useState } from "react";
import URL from "../../Connection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

function AddPatient() {
  const [addPat, setAddPat] = useState({});

  function handleChange(e) {
    setAddPat({
      ...addPat,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${URL}/patients/api/create`, addPat);
      if (response.status === 200) {
        toast.success("Patient Added !");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong :(");
    }
  };

  return (
    <>
      <div className="container  p-0 m-0">
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <NavLink to="/allPatients">List Patients</NavLink>
              </li>
              <li>
                <NavLink to="/addPatient">Add Patient</NavLink>
              </li>
              <li>
                <NavLink to="/updatePatient">Update Patient</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-9 my-2">
            <div className="container-fluid login m-5 p-5">
              <div className="row ">
                <div>
                  <h2>Add Patient</h2>

                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username:  
                    </label>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:  
                    </label>
                    <input
                      type="text"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name:  
                    </label>
                    <input type="text" name="name" onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">
                      DateOfBirth:  
                    </label>
                    <input
                      type="text"
                      name="dateOfBirth"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:  
                    </label>
                    <input type="text" name="email" onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="lastAppointment" className="form-label">
                      LastAppointment:  
                    </label>
                    <input
                      type="text"
                      name="lastAppointment"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPatient;
