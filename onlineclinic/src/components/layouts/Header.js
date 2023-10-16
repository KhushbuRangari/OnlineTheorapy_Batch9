import React from 'react'
import './Header.css'
import{Link} from 'react'

function Header() {
    return (
        <>
       {/* *** NAVBAR*** */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" >Practo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/finddoctor' className="nav-link active" aria-current="page" href="#">Find Doctors</Link>
                            </li>
                              <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Video Consult</a>
                            </li>
                            <li className="nav-item">
                                <Link to='medicines' className="nav-link active" aria-current="page" href="#">Medicins</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Lab Tests</a>
                            </li>
                        
                      
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Login/SignUp</button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header