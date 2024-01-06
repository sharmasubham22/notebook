import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
// import gradient from "./images/gradient.png";

export default function Loginform(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const host = "https://stories-app-uf8u.onrender.com";

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
      <div className="container">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-4 g-4">
          <div className="col p-3 d-flex justify-content-center align-items-center">
            <div className="section-content">
              <h1 className="section-heading">
                "We're all <span>Stories</span> in the end." -Steven Moffat
              </h1>
              {/* <p className="section-paragraph">
                Every step forward is a step towards knowledge. Embrace the
                journey.
              </p> */}
            </div>
          </div>
          <div className="col form-div">
            <form onSubmit={handleSubmit}>
              <h2>Welcome Back! 👋🏻</h2>
              <p>Enter your credentials to access your account.</p>

              <div className="input-container">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={onChange}
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="login-btn"
                onclick="this.classList.toggle('button--loading')"
              >
                <span class="button__text">Log In</span>
              </button>
              <div className="or-divider">or</div>
              <Link className="signin-btn" to="/signup">
                <span>Sign up Here</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
