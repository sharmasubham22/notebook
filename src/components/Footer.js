import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div
      className="container p-4 mt-5 mb-3 d-flex justify-content-between fs-5"
      style={{
        background: "#F4D799",
        borderRadius: "10px",
        border: "3px solid  #33322E",
      }}
    >
      <div>
        &#169; 2024 | <span style={{ fontWeight: "600" }}>Stories</span>
      </div>

      <div>
        <Link to="#" className=" social">
          <i className="fa-brands fa-square-x-twitter fs-3 mx-3"></i>
        </Link>{" "}
        <Link to="#" className=" social">
          <i className="fa-brands fa-instagram fs-3"></i>
        </Link>
      </div>
    </div>
  );
}
