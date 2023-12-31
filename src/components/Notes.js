import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import { radio } from "./images/assets";

const Notes = (props) => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNoteById, getNotes, editNote } = context;
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
      getNoteById();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note update successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const btnstyle = {
    backgroundColor: "#F4D799",
    border: "2px solid #33322E",
    color: "#33322E",
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      {/* <div className="or-divider">Stories</div> */}
      <div className="container">
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          ref={ref}
          data-bs-target="#exampleModal"
          data-bs-whatever="editnote"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{
                background: "#faeed2",
                borderRadius: "10px",
                border: "3px solid  #33322E",
              }}
            >
              <div
                className="modal-header"
                style={{ borderBottom: "2px solid #33322E" }}
              >
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      placeholder="Title should be atleast 5 characters long."
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      minLength={5}
                      required
                      style={{ border: "2px solid #33322E" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      placeholder="Description should be atleast 5 characters long."
                      value={note.edescription}
                      onChange={onChange}
                      minLength={5}
                      required
                      style={{ border: "2px solid #33322E" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <select
                      className="form-select"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      aria-label="Default select example"
                      onChange={onChange}
                      style={{ border: "2px solid #33322E" }}
                    >
                      <option defaultValue="No Tag">Select a Tag</option>
                      <option value="Personal">Personal</option>
                      <option value="Work">Work</option>
                      <option value="Home">Home</option>
                    </select>
                  </div>
                </form>
              </div>
              <div
                className="modal-footer"
                style={{ borderTop: "2px solid #33322E" }}
              >
                <button
                  type="button"
                  ref={refClose}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={
                    note.etitle.length < 5 || note.edescription.length < 5
                  }
                  onClick={handleClick}
                  className="btn btn-primary"
                  style={btnstyle}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 g-4">
          <h1 style={{ textAlign: "center" }}>
           {radio} My Notes {radio}
          </h1>
          <div>
            {notes.length === 0 && "Write your first note to display here!!"}
          </div>
          {notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                updateNote={updateNote}
                getNote={getNoteById}
                note={note}
                showAlert={props.showAlert}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
