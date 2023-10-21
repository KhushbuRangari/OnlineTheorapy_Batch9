import axios from 'axios';
import React,{useState} from 'react';
import URL from '../../Connection.js';

function Register() {

const [register,setRegister]= useState({});
    function  handleChange(e){
        setRegister({
            ...register,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async ()=>{
      try {
        const response = await axios.post(`${URL}/User/register/`,register)
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                 
                    <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label">UserName</label>
                            <input type="Username" name='username'  onChange={handleChange} className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email'    onChange={handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password'  onChange={handleChange}  className="form-control" id="exampleInputPassword1" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                
                </div>
            </div>
        </div>
    )
}

export default Register