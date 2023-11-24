import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./NoteLogo.png";

const Signup = (props) => {
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

  const host = "http://localhost:5000";
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
      console.log("test")
      navigate("/");
      props.showAlert("Successfully Signed up", "success");
    } else {
      props.showAlert("Incorrect details provided", "danger");
    }
      

  };

  const btnstyle = {
    backgroundColor: "#9F6247",
    borderColor: "#9F6247",
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card shadow my-5" style={{ width: "fit-content", borderRadius:"15px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              width={500}
              src={logo}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="card-body p-5" width="fit-content">
              <h5 className="card-title text-center fs-3">Sign in</h5>
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="name" className="form-label">
                    Enter your Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={onChange}
                    id="name"
                    name="name"
                    minLength={3}
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="email" className="form-label">
                    Enter your Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={onChange}
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Set a Password
                  </label>
                  <input
                    type="password"
                    onChange={onChange}
                    className="form-control"
                    id="password"
                    name="password"
                    minLength={6}
                    required
                  />
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onChange={onChange}
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    minLength={6}
                    required
                  />
                </div> */}
                <button
                  type="submit"
                  className="btn btn-primary mb-4"
                  style={btnstyle}
                >
                  {" "}
                  Submit
                </button>
              </form>
              <p>
                Already a member?{" "}
                <Link to="/login" style={{ color: "#9F6247" }}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
