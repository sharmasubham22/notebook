import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
const {note, updateNote} = props;
const context = useContext(noteContext);
const { deleteNote } = context;
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight">
              <h5 className="card-title">{note.title}</h5>
            </div>
            <div className="bd-highlight">
              <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>(updateNote(note))}></i>
            </div>
            <div className="bd-highlight">
              <i
                className="fa-solid fa-trash-can mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note deleted successfully", "success");
                }}
              ></i>
            </div>
          </div>
          <span className="badge rounded-pill my-2 bg-primary">{note.tag}</span>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem
