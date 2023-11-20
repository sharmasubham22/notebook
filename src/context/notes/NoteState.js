import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const notesData = [
    {
      _id: "655b7fd2759479032ad91540",
      user: "65590144e80a68de011f0418",
      title: "title 1",
      description: " description 1",
      tag: "tag 1",
      date: "1700495314167",
      __v: 0,
    },
    {
      _id: "655b7fe8759479032ad91543",
      user: "65590144e80a68de011f0418",
      title: "title 2",
      description: " description 2",
      tag: "tag 2",
      date: "1700495336411",
      __v: 0,
    },
    {
      _id: "655b7fe8759479032ad91543",
      user: "65590144e80a68de011f0418",
      title: "title 2",
      description: " description 2",
      tag: "tag 2",
      date: "1700495336411",
      __v: 0,
    },
    {
      _id: "655b7fe8759479032ad91543",
      user: "65590144e80a68de011f0418",
      title: "title 2",
      description: " description 2",
      tag: "tag 2",
      date: "1700495336411",
      __v: 0,
    },
    {
      _id: "655b7fe8759479032ad91543",
      user: "65590144e80a68de011f0418",
      title: "title 2",
      description: " description 2",
      tag: "tag 2",
      date: "1700495336411",
      __v: 0,
    },
    {
      _id: "655b7fe8759479032ad91543",
      user: "65590144e80a68de011f0418",
      title: "title 2",
      description: " description 2",
      tag: "tag 2",
      date: "1700495336411",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesData)

  return (
    <NoteContext.Provider value= {{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
