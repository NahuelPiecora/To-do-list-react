import React, { useState } from "react";
import TaskInput from "./taskinput.jsx";


const Home = () => {
  const [list, setlist] = useState([]);
  const addItem = (listitem) => {
    const newList = [...list, listitem];

    setlist(newList);
  };
  const removeItem = (index) => {
    //const removeToDo = list.filter((i, item) => i != index);
	const newArray = [...list]
	newArray.splice(index, 1);
    setlist(newArray);
	console.log(newArray)
  };

  return (
    <>
      <h1> To-do</h1>
      <div className="container-fluid">
        <TaskInput addItem={addItem} />
        {list.map((li, i) => {
          return (
            <div key={i}>
              {" "}
              <li>
                {li}
                <button onClick={() => removeItem(i)}>x</button>
              </li>
            </div>
          );
        })}
        {list.length} task left
      </div>
    </>
  );
};

export default Home;
