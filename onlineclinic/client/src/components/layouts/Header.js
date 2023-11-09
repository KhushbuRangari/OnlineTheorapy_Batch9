import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header({ isLogged,setisLogged }) {
    const navigate = useNavigate();
    function logout() {
         setisLogged({
            ...isLogged,
            status:false,
            user:null,
            type:null
        })
        navigate("/");
       
      }

    //   console.log(isLogged);
  return (
    <>
      {/* *** NAVBAR*** */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Practo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/finddoctor"
                  className="nav-link active"
                  aria-current="page"
                >
                  Find Doctors
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Video Consult
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="medicines"
                  className="nav-link active"
                  aria-current="page"
                >
                  Medicines
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Lab Tests
                </a>
              </li>
              {isLogged.status ? (
                <>
                  <li className="nav-item">
                  <button onClick={logout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Login/SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
