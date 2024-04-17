import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const AddNotes = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
    e.preventDefault();
  }
  const [isDone, setDone] = useState(false);

  return (
    <div className="cnib">
      <input
        type="text"
        name="title"
        required
        className="title"
        onClick={() => setDone(() => !isDone)}
        onChange={handleChange}
        placeholder="Add title..."
        value={note.title}
      />
      {isDone && (
        <textarea
          name="content"
          required
          id=""
          cols="150"
          rows="3"
          onChange={handleChange}
          placeholder="Add note here..."
          className="content"
          value={note.content}
        ></textarea>
      )}
      <div className="btn">
        {isDone ? (
          <Fab
            onClick={
              note.title.length !== 0 && note.content.length !== 0
                ? () => {
                    props.onSend(note);
                    setNote({ title: "", content: "" });
                  }
                : null
            }
          >
            <AddIcon />
          </Fab>
        ) : null}
      </div>
    </div>
  );
};

export default AddNotes;
