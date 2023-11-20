import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesData = [];
  const [notes, setNotes] = useState(notesData);

  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1OTAxNDRlODBhNjhkZTAxMWYwNDE4In0sImlhdCI6MTcwMDMzMjE1M30.UTUmN56WyUWZ9fQeZkPQVZ7yEPXidxKV_9EqL3PS1l0",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a new note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1OTAxNDRlODBhNjhkZTAxMWYwNDE4In0sImlhdCI6MTcwMDMzMjE1M30.UTUmN56WyUWZ9fQeZkPQVZ7yEPXidxKV_9EqL3PS1l0",
      },
      body: JSON.stringify({title, description, tag}),
    });
    getNotes()
    const note = await response.json();
    setNotes(notes.concat(note))
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1OTAxNDRlODBhNjhkZTAxMWYwNDE4In0sImlhdCI6MTcwMDMzMjE1M30.UTUmN56WyUWZ9fQeZkPQVZ7yEPXidxKV_9EqL3PS1l0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1OTAxNDRlODBhNjhkZTAxMWYwNDE4In0sImlhdCI6MTcwMDMzMjE1M30.UTUmN56WyUWZ9fQeZkPQVZ7yEPXidxKV_9EqL3PS1l0",
      },
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
