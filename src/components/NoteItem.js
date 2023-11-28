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
      <div className="col-md-4 col-lg-3">
        <div className="card h-100 my-3">
          <div className="card-body">
            <div className="d-flex bd-highlight">
              <div className="flex-grow-1 bd-highlight">
                <h5 className="card-title">{capitalize(note.title)}</h5>
              </div>
              <div className="bd-highlight">
                <i
                  className="fa-solid fa-pen-to-square mx-2"
                  onClick={() => updateNote(note)}
                  style={{ color: "#9F6247" }}
                ></i>
              </div>
              <div className="bd-highlight">
                <i
                  className="fa-solid fa-trash-can mx-2"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Note deleted successfully", "success");
                  }}
                  style={{ color: "#9F6247" }}
                ></i>
              </div>
            </div>
            <span
              className="badge rounded-pill my-2"
              style={{ backgroundColor: "#9F6247" }}
            >
              {note.tag}
            </span>
            <p className="card-text">{note.description.slice(0, 200)}...</p>
          </div>
          <div className="card-footer">
            <Link
              className="text-muted"
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
              to="/notedetails"
            >
              Open Note &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItem
