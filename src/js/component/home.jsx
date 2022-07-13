import React, { useState, useEffect } from "react";
import TaskInput from "./taskinput.jsx";

const Home = () => {
  const [list, setlist] = useState([]);
  const addItem = (listitem) => {
  const newToDo = {label:newTask, done:false};
    const newList = [...list, listitem];

  fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
    method: "PUT",
    body: JSON.stringify(newList),
    headers: {
    "Content-Type": "application/json",
    },
    })
    .then((resp) => {
    if (resp.status == 200) {
    return resp.json();
    }
    })
    .then((data) => {
    alert(data.result);
    fetchListItems;
    })
    .catch((error) => {
    console.log(error);
    });
    setInputValue("");
    }
  const removeItem = (index) => {
    const removeToDo = list.filter((item, i) => i != index);
    const newArray = [...list];
    //newArray.splice(index, 1);
    setlist(removeToDo);
    console.log(removeToDo);
  };

  useEffect(() => {
    fetchListItems();
  }, []);
  function fetchListItems() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status == 200) {
          return resp.json();
        }
      })
      .then((data) => {
        setlist(data);
        console.log(data);
      })
      .catch((error) => {
        //error handling
        console.log(error);
      });
  }

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
                {li.label}
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
