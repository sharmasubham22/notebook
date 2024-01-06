import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import { Link } from 'react-router-dom';

const NoteItem = (props) => {
const {note, updateNote} = props;
const context = useContext(noteContext);
const { deleteNote } = context;

const capitalize = (word) => {
  if (word === "danger") {
    word = "error";
  }
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div
          className="card h-100 my-3"
          style={{
            background: "#faeed2",
            borderRadius: "10px",
            border: "3px solid #33322E",
            boxShadow: ".3rem .3rem 0 #33322E",
          }}
        >
          <div
            className="card-header"
            style={{ borderBottom: "2px solid #33322E" }}
          >
            <div className="d-flex bd-highlight">
              <div className="flex-grow-1 bd-highlight">
                <h4 className="card-title">{capitalize(note.title)}</h4>
              </div>
              <div className="bd-highlight fs-4">
                <i
                  className="fa-solid fa-pen-to-square mx-5 note-action"
                  onClick={() => updateNote(note)}
                ></i>
              </div>
              <div className="bd-highlight fs-4">
                <i
                  className="fa-solid fa-trash-can note-action"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Note deleted successfully", "success");
                  }}
                ></i>
              </div>
            </div>
         
          </div>
          <div className="card-body">
            <span
              className="badge rounded-pill my-3"
              style={{ backgroundColor: "#9F6247", fontSize: "14px" }}
            >
              {note.tag}
            </span>
            <p className="card-text">{note.description.slice(0, 200)}...</p>
          </div>
          <div
            className="card-footer"
            style={{ borderTop: "2px solid #33322E" }}
          >
            <Link
              // onClick={() => {
              //   navigate("/notedetails",
              //   {
              //     state: {
              //       title: note.title,
              //       description: note.description,
              //       tag: note.tag
              //     },
              //   }
              //   );
              // }}
              to="notedetails"
            >
              Open Note <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItem
