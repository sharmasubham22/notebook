import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import typImg from './element1.png'

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
      backgroundColor: "#9F6247",
      borderColor: "#9F6247",
    };
  return (
    <div>
      <div className="container my-3">
        <div className="row border shadow" style={{ borderRadius: "15px" }}>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              width={600}
              src={typImg}
              alt="element1"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-6 p-5">
            <h1 className="text-center mb-3">Add a New Note</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
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
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                  Tag
                </label>
                <select
                  className="form-select"
                  id="tag"
                  name="tag"
                  aria-label="Default select example"
                  onChange={onChange}
                >
                  <option defaultValue="No Tag">Select a Tag</option>
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="Home">Home</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={note.title.length < 5 || note.description.length < 5}
                onClick={handleClick}
                className="btn btn-primary"
                style={btnstyle}
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
