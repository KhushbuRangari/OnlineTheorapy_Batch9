import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className='container-fluid '>
      <div className="row">
        <div className="col">
          <div className=" search " style={{ marginTop: "2%" }}>
            <div className="row" style={{ width: '100%' }}>
              <div className="col-md-8 " style={{ width: '70%' }}>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Location" />
                  <span className="input-group-text icon"><i className='fa fa-location'></i></span>
                  <input type="text" className="form-control" placeholder="Search doctors,clinics,hospitals,etc." />
                </div>    
              </div>
              {/* <div className="col-sm-6">
            <img src="./public/images/plus-tag.png" alt="Plus Image" />dczc</div> */}
            </div>
          </div>
          {/* *************************************************************** */}
          <div className="container-fluid px-2">
            <div className="row">
              <div className="col">
                <img src="./images/chronic_consumer_banner_dweb.png" alt="" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
          {/* *************************************************************** */}
          {/* ******************************************************************** */}

          <div className="container-fluid container3 ">
            <div className="row">
              <div className="col-3 ">
                <div className="card" >
                  <span className='img'>
                    <img src="./images/card3.png" className="card-img-top" alt="..." />
                  </span>
                  <div className="card-body">
                    <h5 className="card-title fw-bold ">Find Doctors Near You</h5>
                    <p className="card-text">Confirmed Appointment</p>
                  </div>
                </div>

              </div>
              <div className="col-3">
                <div className="card" >
                  <span className='img'>
                    <img src="./images/card2.png" className="card-img-top" alt="..." />
                  </span>
                  <div className="card-body">
                    <h5 className="card-title fw-bold ">Medicines</h5>
                    <p className="card-text">Sample pickup at home</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card" >
                  <span className='img'>
                    <img src="./images/card 1.png" className="card-img-top" alt="..." />
                  </span>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Medicines</h5>
                    <p className="card-text">Essentials at doorstep</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card" >
                  <span className='img'>
                    <img src="./images/card4.png" className="card-img-top" alt="..." />
                  </span>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Lab Test </h5>
                    <p className="card-text">Sample pickup at home</p>
                  </div>
                </div>
              </div>
          
            </div>
          </div>












          {/* *********************************************************************************** */}
          {/* ******************************************************************** */}

          {/* *************************************************************** */}
          <div className="conatiner-fluid p-2 ">
            <div className="row">
              <div className="col fw-bold text-start">
                <h3>Consult top doctors online for any health concern</h3>
                <h6>Private online consultations with verified doctors in all specialists</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *************************************************************** */}
      <div className="container-fluid round-card">
        <div className="row">
          <div className="col-2 ">
            <div className="card" >
              <span className='img'>
                <img src="./images/round card 1.png" className="card-img-top" alt="..." />
              </span>
              <div className="card-body">
                <p className="card-text">Period doubts or Pregnancy </p>
                <a href="/" className="btn btn-light ">
                  <p >Consult Now</p>
                </a>
              </div>
            </div>

          </div>
          <div className="col-2">
            <div className="card" >
              <span className='img'>
                <img src="./images/round card 2.png" className="card-img-top" alt="..." />
              </span>
              <div className="card-body">
                <p className="card-text">Period doubts or Pregnancy </p>
                <a href="/" className="btn btn-light ">
                  <p >Consult Now</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" >
              <span className='img'>
                <img src="./images/round card 3.png" className="card-img-top" alt="..." />
              </span>
              <div className="card-body">
                <p className="card-text">Period doubts or Pregnancy </p>
                <a href="/" className="btn btn-light ">
                  <p >Consult Now</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" >
              <span className='img'>
                <img src="./images/round card 4.png" className="card-img-top" alt="..." />
              </span>
              <div className="card-body">
                <p className="card-text">Period doubts or Pregnancy </p>
                <a href="/" className="btn btn-light ">
                  <p >Consult Now</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" >
              <span className='img'>
                <img src="./images/round card 5.svg" className="card-img-top" alt="..." />
              </span>
              <div className="card-body">
                <p className="card-text">Period doubts or Pregnancy </p>
                <a href="/" className="btn btn-light ">
                  <p >Consult Now</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" >
              <span className='img'>
                <img src="./images/round card 3.png" className="card-img-top" alt="..." />
              </span>
              <div className="card-body">
                <p className="card-text">Period doubts or Pregnancy </p>
                <a href="/" className="btn btn-light ">
                  <p >Consult Now</p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HomePage