import axios from "axios";
import React, { useState } from "react";
import URL from "../../Connection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login({ setisLogged }) {
  const [login, setLogin] = useState({});
  const [user, setUser] = useState("Patient");
  const navigate = useNavigate();

  const onOptionChange = (e) => {
    setUser(e.target.value);
  };

  function handleChange(e) {
   
  setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }
  const email = login.email;
  const password = login.password;
  const handleSubmit = async () => {
    try {
      if (user == "Staff") {
        const response = await axios.post(`${URL}/clinic-staff/api/login`, {
          email,
          password
        });
        if (response.status === 200) {
          setisLogged({
            status:true,
            user:response.data,
            type:user

          });
          navigate("/allPatients");
          toast.success("You are logged in!");
        } else {
          toast.error("Something went wrong");
        }
      }  else if(user == 'Patient'){
        const response = await axios.post(`${URL}/patients/api/login`, {
          email,
          password,
          
        });
        if (response.status === 200) {
          setisLogged({
            status:true,
            user:response.data,
            type:user
          });
          navigate("/finddoctor");
          toast.success("You are logged in!");

        } else {
          toast.error("Something went wrong");
        }
      }
  
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong :(");
    }
  };

  return (
    <div className="container-fluid login m-5 p-5">
      <div className="row ">
        <div>
          <h1>Login</h1>
          <input
            type="radio"
            name="user"
            value='Patient'
            checked={user === "Patient"}
            onChange={onOptionChange}
          />
          <label htmlFor="patient">Patient</label>

          <input
            type="radio"
            name="user"
            value='Staff'
            checked={user === "Staff"}
            onChange={onOptionChange}
          />
          <label htmlFor="staff">Staff</label>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
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
  );
}

export default Login;
