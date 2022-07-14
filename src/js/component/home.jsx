import React, { useState, useEffect } from "react";
import TaskInput from "./taskinput.jsx";

const Home = () => {
  const [list, setlist] = useState([]);
  const addItem = (listitem) => {
    const newToDo = { label: newTask, done: false };
    const newList = [...list, listitem];
  };
  const url = "https://assets.breatheco.de/apis/fake/todos/user/nahuelp";

  const updateToDos = () => {
    fetch ( url , {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toDoList = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        response.json();
      }
    } catch (error) {
      throw Error(error);
    }
  };
  const removeItem = (index) => {
    const removeToDo = list.filter((item, i) => i != index);
    const newArray = [...list];
    //newArray.splice(index, 1);
    setlist(removeToDo);
    console.log(removeToDo);
  };

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setlist(data)
      }
    } catch (error) {
      throw Error(error);
    }
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
