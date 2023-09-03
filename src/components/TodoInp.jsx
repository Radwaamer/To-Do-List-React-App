import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React, { useState } from 'react'

const TodoInp = ({addTasks,toggleTasks}) => {
  const [value,setValue]=useState("");
  const [mode,setMode]=useState(true);

  return (
    <div className="todo-input">
      <FeatherIcon icon="circle" size={20} onClick={()=>{
        setMode(!mode);
        toggleTasks(mode)}}/>
      <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Add New Task...' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit" disabled={!value.trim()} onClick={()=>{
          addTasks(value.trim())
          setValue("")}}>ADD</button>
      </form>
    </div>
  )
}

export default TodoInp