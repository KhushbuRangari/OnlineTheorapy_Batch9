import React from 'react'
import Carousel from './Carousel'
import './styles-medicines.css'
import MedicineProducts from './MedicineProducts'
import Consultation from './Consultation'

const Medicines = () => {
  return (
    <div>
      <section> 
        <form className="d-flex m-5 col-8 justify-content-center" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form></section>
      <Carousel />
      <MedicineProducts />
      <Consultation />
      <div></div>
    </div>
  )
}

export default Medicines