import React from 'react'
import {Fab} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = (props) => {
  return (
    <div className="note-container">
        <div className="note-title">{props.data.title}</div>
        <div className="note">{props.data.content}</div>
        <div className="btn">
        <Fab onClick={()=>props.onDelete(props.id)}><DeleteIcon /></Fab>
        </div>
    </div>
  )
}

export default Notes
