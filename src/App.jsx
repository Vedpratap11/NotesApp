import { TiDeleteOutline } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
function App() {
  const [allMessage, setAllMessage] = useState([]);
  const [text, setText] = useState();
  const [color, setColor] = useState("#000000");
  const [undoNote, setUndoNote] = useState([]);

  function handleNote(e) {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      Message: text,
      Color: color,
      createdAt: new Date().toLocaleString(),
    };
    setAllMessage([...allMessage, obj]);
    setText("");
    setColor("");
  }

  function handleDeleteNote(id) {
    setAllMessage(allMessage.filter((item) => item.id !== id));
  }
  function undoMessage() {
    const note = allMessage;
    const lastCreatedNote = note.pop();
    setUndoNote((prev) => [...prev, lastCreatedNote]);
  }

  function handleEdit(){
    
  }

  return (
    <div className="mainDiv">
      <div className="noteDiv1">
        <form onSubmit={handleNote}>
          <textarea
            name="task"
            className="taskArea"
            placeholder="Enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <input
            type="color"
            className="colorPalette"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Add Note
          </button>
          <button className="btn1" onClick={undoMessage}>
            Undo
          </button>
        </form>
      </div>
      <div className="noteDiv2">
        {allMessage.map((item) => {
          return (
            <div
              key={item.id}
              style={{ backgroundColor: item.Color }}
              className="note"
            > <MdModeEdit className="edit" />
              <span className="cross" onClick={() => handleDeleteNote(item.id)}>
                <TiDeleteOutline />
              </span>
              <div className="message">{item.Message}</div>
              
              <div className="afterd">{item.createdAt}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
