import React, { useState } from "react";
import  TaskInput  from "./taskinput.jsx";


const Home = () => {
	const [list, setlist]= useState([])
	const addItem = (listitem) =>{
	const newList =[...list]
	newList.push(listitem)
	setlist(newList)
	
	}
return(
<>
<h1> To-do</h1>
 <div className="container-fluid">
    <TaskInput addItem={addItem} />
	{list.map((li,index)=><li key={`${li}-${index}`}>{li}</li>)}


 </div>
</>
)
}

export default Home;