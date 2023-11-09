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

  function handleSearchClick() {
    if (searchVal === "") {
      setMedicines(medicines);
      return;
    }
    const filterBySearch = medicines.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
      return "";
    });
    setMedicines(filterBySearch);
  }
  return (
    <div>
      <Carousel />
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <input onChange={(e) => setSearchVal(e.target.value)}></input>
          </div>
        </div>
        <div className="row">
          <div className="col text-center d-flex flex-row flex-wrap justify-content-center ">
            {medicines.map((medicines, index) => (
              <div key={index} className="card col-4 mb-3">
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
