import React, { useState } from "react";
import { useHref, useNavigate } from "react-router-dom";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email and password match the admin credentials
    if (email === "admin@gmail.com" && password === "Admin@123") {
      // Redirect to another page for admin
      navigate("/UpdateGarments");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="container mt-5" style={{ fontFamily: "poppins" }}>
        <div className="row mx-auto mt-5">
          <div className="mx-auto col-md-6 mt-5 pt-4">
            <div className="card mb-5 p-2 shadow rounded">
              <div className="card-body mt-2">
                <div className="row mb-3">
                  <h3 className="text-success text-center border-bottom border-primary p-4">
                    ADMIN LOGIN
                  </h3>
                </div>
                <div className="col-sm-6 offset-sm-3">
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
                    <button onClick={handleSubmit} className="btn btn-primary">
                      Login
                    </button>
                    {errorMessage && (
                      <p style={{ color: "red" }}>{errorMessage}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
