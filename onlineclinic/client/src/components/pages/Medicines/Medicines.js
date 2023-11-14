import Carousel from "./Carousel";
import "./styles-medicines.css";
import MedicineProducts from "./MedicineProducts";
import Consultation from "./Consultation";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import URL from "../../../Connection";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const getMedicines = async () => {
      try {
        const response = await axios.get(`${URL}/medicine/api/all`);
        if (!response.data) {
          toast.error("Something went wrong");
        } else {
          setMedicines(response.data);
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    };
    getMedicines();
  }, []);

  const handleSearchClick = async () => {
    try {
      if (searchVal === "") {
        const response = await axios.get(`${URL}/medicine/api/all`);
        setMedicines(response.data);
      } else {
        const response = await axios.get(`${URL}/medicine/api/search?search=${searchVal}`);
        setMedicines(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to search for medicines");
    }
  };
  return (
    <div>
      {/* <Carousel /> */}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col w-100">
          <input
              type="text"
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search Medicines"
              style={{width:"70%"}}
            />
         
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSearchClick}
              style={{width:"18%",marginLeft:"2%"}}
            >
              Search<i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="row" style={{marginTop:"5%"}}>
          <div className="col text-center d-flex flex-row flex-wrap justify-content-center ">
            {medicines.map((medicines, index) => (
              <div key={index} className="card col-4 mb-3 mx-3">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body ">
                  <h2 className="card-title">{medicines.name}</h2>
                  <h5 className="card-text">{medicines.chemicalComposition}</h5>
                  <h6>{medicines.dosage}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <section> 
        <form className="d-flex m-5 col-8 justify-content-center" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form></section>
      <Carousel />
      <MedicineProducts />
      <Consultation />
      <div></div> */}
    </div>
  );
};

export default Medicines;
