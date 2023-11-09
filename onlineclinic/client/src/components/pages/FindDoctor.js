import React, { useEffect, useState } from "react";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar";
import PopularSearches from "./PopularSearches";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import URL from "../../Connection";

export default function FindDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await axios.get(`${URL}/doctors/api/all`);
        if (!response.data) {
          toast.error("Something went wrong");
        } else {
          setDoctors(response.data);
        }

      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      
      }
    };
    getDoctors();
  }, []);

  return (
    <div>
      <div className="container my-3">
        <div className="row text-center align-items-center "  >
          <div className="col d-flex flex-row flex-wrap justify-content-center align-items-center"  >
            {doctors.map((doc, index) => (
              <div key={index} className="card align-items-center m-3">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body  " >
                  <h2 className="card-title">{doc.name}</h2>
                  <h5 className="card-title">({doc.specialty})</h5>
                  <h6 className="card-title">{doc.education}</h6>
                  {/* <h6 className="card-title">{doc.contactInfo}</h6> */}
                  {/* <h5 className="card-title">{doc.dateOfBirth}</h5> */}
                 
                  <p className="card-text">
                    {doc.availableHours}
                  </p>
                  <p>{doc.medicalHistory}</p>

                  <Link to="/doctorProfile" state={{ some:doc }} className="btn btn-primary">
                 
                    show profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* *********Banner************* */}

      {/* <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 align-items-center">
                            <div className="col-md-5 align-items-center">
                                <h2>Your Home For Health</h2>
                                <h3>Find and Book</h3>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <LocationSelector />
                                    <SearchBar />
                                    <PopularSearches />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      {/* **********Services*************** */}
      {/* <div className="options">
                <span className="option px-2">

                    <span>Consult a Doctor</span>
                </span>
                <span className="option px-2">

                    <span>Book Test</span>
                </span>
                <span className="option px-2">

                    <span>View Medical Records</span>
                </span>
                <span className="option px-2">

                    <span>Order Medicines</span>
                </span>
                <span className="option px-2">

                    <span>Read Articles</span>
                </span>
            </div> */}
      {/* *******SecurityInfo****** */}
      {/* <div className="security">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Safety of your data is our top priority.</h3>
                            <ul>
                                <li>Multi-level security checks</li>
                                <li>Multiple data backups</li>
                                <li>Stringent data privacy policies</li>
                            </ul>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </div> */}

      {/* ********Info******** */}
      {/* <div className="security-info">
                <div className="security-info-item">
                    <span className="security-info-item px-2">256-bit encryption</span>
                    <span className="security-info-item px-2">ISO 27001 certified</span>
                    <span className="security-info-item px-2">HIPAA compliant data centers</span>
                    <span className="security-info-item px-2">DSCI member</span>
                </div>
            </div>
 */}
    </div>
  );
}
