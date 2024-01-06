import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logo } from "./images/assets";

export default function Navbar() {
let location = useLocation();
let navigate = useNavigate();

const handleLogout = ()=>{
  localStorage.removeItem('token');
  navigate('/login');
}

  const btnstyle = {
    backgroundColor: "#F6A89E",
    color: '#33322E',
    border: "3px solid #33322E",
  };

  return (
    <div className="container">
      <nav
        className="navbar p-3 mt-3 navbar-expand-lg navbar-light d-flex bd-highlight"
        style={{
          background: "#F4D799",
          borderRadius: "10px",
          border: "3px solid  #33322E",
          // boxShadow: ".5rem .5rem 0  #212121",
        }}
      >
        <div className="container-fluid">
          <div className="p-1 flex-fill bd-highlight">
            <Link
              className="navbar-brand fs-3"
              to="/"
              style={{
                color: "#33322E",
                fontWeight: "Bold",
                textTransform: "uppercase",
              }}
            >
              {logo}
            </Link>
          </div>
          <button
            className="navbar-toggler border-0 fs-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" style={{ color: "#33322E" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item mx-3">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                  style={{ fontWeight: "700" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                  style={{ fontWeight: "700" }}
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div>
                <Link
                  type="button"
                  className="btn mx-2 fs-5"
                  to="/login"
                  style={{ color: "#33322E", border: "3px solid #33322E" }}
                >
                  {" "}
                  Login
                </Link>
                <Link
                  type="button"
                  className="btn mx-2 btn-primary fs-5"
                  to="/signup"
                  style={btnstyle}
                >
                  {" "}
                  Signup
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="btn btn-primary fs-5"
                style={btnstyle}
              >
                {" "}
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
