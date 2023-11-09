import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";
import {  toast } from "react-toastify";
import URL from "../../Connection";
function AllPatients() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await axios.get(`${URL}/patients/api/all`);

        console.log(response.data);
        if (!response.data) {
          toast.error("Something went wrong");
        } else {
          setPatients(response.data);
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    };
    getPatients();
  }, []);
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
            <div
              className="table-responsive "
              style={{
                maxHeight: "550px",
                overflowY: "auto",
                marginTop: "4%",
                marginLeft: "10%",
              }}
            >
              <table class="table caption-top">
                <caption>List of Patients</caption>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">DateOfBirth</th>
                    <th scope="col">Email</th>
                    <th scope="col">LastAppointment</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={patient._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{patient._id}</td>
                      <td>{patient.name}</td>
                      <td>{patient.username}</td>
                      <td>{patient.dateOfBirth}</td>
                      <td>{patient.email}</td>
                      <td>{patient.lastAppointment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPatients;
