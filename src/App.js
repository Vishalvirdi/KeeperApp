import { useState } from "react";
import AddNotes from "./components/addnotes";
import Notes from "./components/notes";

function App() {
  const [notes,setNotes] = useState([]);
  function setData(note){
    setNotes(prevNotes=>([...prevNotes,note]))
  }
  function handleNoteDelete(id){
    setNotes(prev => prev.filter((note,index)=> index !==id));
  }
  return (
    <div className="container">
    <header className="header">
      Keeper
    </header>
      <AddNotes onSend={setData} />
     <div className="notes-container">
     {notes.map((e,i)=><Notes data={e} id={i} key={i} onDelete={handleNoteDelete}/>)}
     </div>
    </div>
  );
}

export default App;
