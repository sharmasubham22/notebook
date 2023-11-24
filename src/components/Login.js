import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./NoteLogo.png";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const host = "http://localhost:5000";

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Successfully Logged in", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card shadow my-5" style={{ borderRadius: "15px" }}>
          <div className="row g-0">
            <div className="col-md-6">
              <img
                width={500}
                src={logo}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="card-body p-5">
                <h5 className="card-title text-center fs-3">Login</h5>
                <form onSubmit={handleSubmit}>
                  <div className="my-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={onChange}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-4"
                    style={{
                      backgroundColor: "#9F6247",
                      borderColor: "#9F6247",
                    }}
                  >
                    Submit
                  </button>
                </form>
                <p>
                  New here?{" "}
                  <Link to="/signup" style={{ color: "#9F6247" }}>
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
