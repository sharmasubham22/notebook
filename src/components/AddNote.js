import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";
// import notes from './images/notes-flatline.svg';
import bg from './images/scribble.svg';
import { heroText } from "./images/assets";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note added successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

    const btnstyle = {
      backgroundColor: "#8CD4CB",
      border: "2px solid #33322E",
      color: "#33322E",
    };
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
        <div className="col p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              background: `url(${bg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {heroText}
          </div>
        </div>
        <div
          className="col form-div"
          style={{
            borderRadius: "10px",
            border: "3px solid #33322E",
            boxShadow: ".5rem .5rem 0  #33322E",
            background: "#D0F4F0",
          }}
        >
          <h2 className="mb-3">
            Create a New Note <i class="fa-solid fa-file-circle-plus"></i>
          </h2>
          <form>
            <div className="mb-3 form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={note.title}
                placeholder="Title should be atleast 5 characters long."
                aria-describedby="emailHelp"
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={note.description}
                placeholder="Description should be atleast 5 characters long."
                onChange={onChange}
                minLength={5}
                rows={5}
                required
                style={{ border: "2px solid #33322E" }}
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="tag">Tag</label>
              <select
                className="form-select"
                id="tag"
                name="tag"
                aria-label="Default select example"
                onChange={onChange}
                style={{ border: "2px solid #33322E" }}
              >
                <option defaultValue="No Tag">Select a Tag</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Home">Home</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={note.title.length < 5 || note.description.length < 5}
              onClick={handleClick}
              className="btn btn-primary login-btn"
              style={btnstyle}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
