import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import gradient from "./images/gradient.png";

export default function SigninForm(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const host = "https://stories-app-uf8u.onrender.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      console.log("test");
      navigate("/");
      props.showAlert("Successfully Signed up", "success");
    } else {
      props.showAlert("Incorrect details provided", "danger");
    }
  };
  return (
    <>
      <div className="container-form">
        <div className="image-section">
          <div className="image-wrapper">
            <img src={gradient} alt="" />
          </div>
          <div className="content-container">
            <h1 className="section-heading">
              "We're all <span>Stories</span> in the end." -Steven Moffat
            </h1>
            <p className="section-paragraph">
              Every step forward is a step towards knowledge. Embrace the
              journey.
            </p>
          </div>
        </div>

        <form className="form-section" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <h2>Welcome to Stories! 👋🏻</h2>
            <p>Enter your details to sign up your account.</p>

            <div className="input-container">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={onChange}
                  minLength={3}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
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
                  onChange={onChange}
                  name="password"
                  id="password"
                  minLength={6}
                  required
                />
              </div>
            </div>
            <button type="submit" className="login-btn">
              Sign In
            </button>
            <div className="or-divider">or</div>
            <Link className="signin-btn" to="/login">
              <span>Log in Here</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
