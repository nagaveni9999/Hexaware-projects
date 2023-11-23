import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Header from "../Routing/Header";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [message, setMessage] = useState('');
const navigate = useNavigate();
const handleSubmit = (event) => {
  event.preventDefault();
  // Perform sign-in logic here
  setMessage('Signin Successful!');
};  

useEffect(() => {
if (localStorage.getItem("user-info")) {
navigate("/Login");


}
}, []);

async function login() {
if (email === "" || password === "") {
setErrorMessage("Please enter both email and password");
return;
}
try {
    const response = await axios.post(
      "https://localhost:44340/api/Account/Login",
      {
        email,
        password,
      }
    );
  
    localStorage.setItem("user-info", JSON.stringify(response.data));
    navigate("/Garments");
  } catch (error) {
    setErrorMessage("Invalid email or password");
  }
  }
  
  return (
    <div>
       <div className="container mt-5"style={{fontFamily:'poppins'}}>
      <div className="row mx-auto mt-5">
          <div className="mx-auto col-md-6 mt-5 pt-4">
             <div className="card mb-5 p-2 shadow rounded">
               <div className="card-body mt-2">
                <div className="row mb-3">
                   <h3 className="text-success text-center border-bottom border-primary p-4">
                     LOGIN FORM
                   </h3>
{/* //                 </div> */}
  <div className="col-sm-6 offset-sm-3">
  {/* <Header/> */}
  
  <div>
  <input
  type="email"
  placeholder="email"
  onChange={(e) => setEmail(e.target.value)}
  className="form-control"
  />
  <br />
  <input
  type="password"
  placeholder="password"
  onChange={(e) => setPassword(e.target.value)}
  className="form-control"
  />
  <br />
  <button onClick={login} className="btn btn-primary">
  Login
  </button>
  {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  </div>
  </div>
  </div>
              <div class="row mt-3">
                            
                             <div class="col-sm-3"></div>
                              <div class="col-sm-3"></div>
                              <div class="col-sm-3"></div>
                             <div class="col-sm-3"><a href="/register" class="text-decoration-none mb-3 text-primary fw-bold ">New User?</a></div>
                            
                        </div>
                        <form onSubmit={handleSubmit}>
     
    </form>
    {message && <p>{message}</p>}
              
              
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
  }