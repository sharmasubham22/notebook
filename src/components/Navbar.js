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
      <nav className="navbar border p-3 m-3 navbar-expand-lg navbar-light bg-light d-flex bd-highlight" style={{borderRadius:"15px"}}>
        <div className="container-fluid">
       
            <div class="p-2 flex-fill bd-highlight">
              <Link
                className="navbar-brand"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  className="btn mx-2 "
                  to="/login"
                  style={{ color: "#9F6247", borderColor: "#9F6247" }}
                >
                  {" "}
                  Login
                </Link>
                <Link
                  type="button"
                  className="btn mx-2 btn-primary"
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
                className="btn btn-primary"
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
