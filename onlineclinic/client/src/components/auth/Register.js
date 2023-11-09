import axios from "axios";
import React, { useState } from "react";
import URL from "../../Connection.js";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [register, setRegister] = useState({});
  const [selectedShift, setSelectedShift] = useState("morning");
  const [selectedRole, setSelectedRole] = useState("nurse");
  const navigate = useNavigate();

  function handleChange(e) {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  }
  //   console.log(register);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${URL}/clinic-staff/api/create`,
        register
      );

      if (response.data.success) {
        toast.success("You are Registered!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const style = {
    display: "flex",
    boxShadow: "1px 12px 18px #888888",
    //     "flexDirection": "column",
    // "justifyContent": "center",
    // "alignItems": "center",
    // "border": "1px solid #ccc",
    borderRadius: "5px",
    // "margin": "auto",
    padding: "30px",
    width: "650px",
  };

  return (
    <div className="container m-5 p-5">
      <div className="row" style={style}>
        <div className="col">
          <h1>Register Staff</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">
              UserName
            </label>
            <input
              type="Username"
              name="username"
              onChange={handleChange}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>

            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedRole}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <option
                    class="dropdown-item"
                    onClick={() => setSelectedRole("admin")}
                  >
                    admin
                  </option>
                </li>
                <li>
                  <option
                    class="dropdown-item"
                    onClick={() => setSelectedRole("nurse")}
                  >
                    nurse
                  </option>
                </li>
                <li>
                  <option
                    class="dropdown-item"
                    onClick={() => setSelectedRole("doctor")}
                  >
                    doctor
                  </option>
                </li>
                <li>
                  <option
                    class="dropdown-item"
                    onClick={() => setSelectedRole("front_desk")}
                  >
                    front_desk
                  </option>
                </li>
              </ul>
            </div>
            {/* <input
              type="role"
              name="role"
              onChange={handleChange}
              className="form-control"
              aria-describedby="emailHelp"
            /> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">
              Name
            </label>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">
              Shift
            </label>
            {/* <input type="shift" name='shift' onChange={handleChange} className="form-control" aria-describedby="emailHelp" /> */}

            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedShift}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <option
                    class="dropdown-item"
                    onClick={() => setSelectedShift("morning")}
                  >
                    Morning
                  </option>
                </li>
                <li>
                  <option
                    class="dropdown-item"
                    onClick={() => setSelectedShift("afternoon")}
                  >
                    Afternoon
                  </option>
                </li>
                <li>
                  <option
                    class="dropdown-item"
                    onClick={() => setSelectedShift("night")}
                  >
                    Night
                  </option>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">
              Department
            </label>
            <input
              type="department"
              name="department"
              onChange={handleChange}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
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

export default Register;
