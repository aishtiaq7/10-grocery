import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  let [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setALert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    console.log('name:',name);

    if(!name){
      //alert
    } else if ( name && isEditing){
      //Edit
    } else {
      const newItem = {
        id: new Date().getTime.toString(),
        title: name
      }
      setList( [
        ...list, newItem
      ]);
      setName('');
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg:eggs"
            value={name}
            onChange={(e) =>{setName(e.target.value)}}
          ></input>
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} />
        <button className="clear-btn">Clear Items</button>
      </div>
    </section>
  );
}

export default App;
