import React from 'react'
import { Link } from 'react-router-dom'

const NotesDetails = () => {
//   let incomingData = useLocation();
//   const title = incomingData.state.title;
//   const desc = incomingData.state.description;
//   const tag = incomingData.state.tag;
  return (
    <div>
      <Link to="/" style={{ color: "#9F6247" }}>
        &larr; Back
      </Link>
        <div className="d-flex bd-highlight fs-2 my-4">
              <div className="flex-grow-1 bd-highlight">
                <h2 className="card-title">Title</h2>
              </div>
              <div className="bd-highlight">
                <i
                  className="fa-solid fa-pen-to-square mx-5"
                  style={{ color: "#9F6247" }}
                ></i>
              </div>
              <div className="bd-highlight">
                <i
                  className="fa-solid fa-trash-can mx-2"
                  style={{ color: "#9F6247" }}
                ></i>
              </div>
            </div>
            <span
              className="badge rounded-pill fs-6"
              style={{ backgroundColor: "#9F6247" }}
            >
              Tag
            </span>
            <h5 className="card-text my-4">Description</h5>
          </div>
  
  );
}

export default NotesDetails
