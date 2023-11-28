import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
let location = useLocation();
let navigate = useNavigate();

const handleLogout = ()=>{
  localStorage.removeItem('token');
  navigate('/login');
}

  const btnstyle = {
    backgroundColor: "#9F6247",
    borderColor: "#9F6247",
  };

  return (
    <div>
      <nav className="navbar border p-3 m-3 navbar-expand-lg navbar-light d-flex bd-highlight" style={{borderRadius:"5px"}}>
        <div className="container-fluid">
       
            <div className="p-1 flex-fill bd-highlight">
              <Link
                className="navbar-brand fs-3"
                to="/"
                style={{
                  color: "#9F6247",
                  fontWeight: "Bold",
                  textTransform: "uppercase",
                }}
              >
                Stories
              </Link>
           
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
                  style={{ color: "#9F6247", borderColor: "#9F6247" }}
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
