import React, { useState } from "react";


const Task = ({list,setlist,i}) => {
    const[visible, toggleVisibility] = useState(false)
    

    const removeItem = index =>{
        const removeToDo = list.filter((i,item) => i != index)
        setlist(removeToDo)
    }


    return (
        
        <span  onMouseEnter={() => toggleVisibility(true)}>
            <button onClick = {() => removeItem(index)}>
             x
            </button>
        </span>
    
    )
}

export default Task;