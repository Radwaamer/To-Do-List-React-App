import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React, { useState } from 'react'

const TodoInp = ({addTasks}) => {
  const [value,setValue]=useState("");

  return (
    <div className="todo-input">
      <FeatherIcon icon="circle" size={20} />
      <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Add New Task...' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit" onClick={()=>{
          addTasks(value)
          setValue("")}}>ADD</button>
      </form>
    </div>
  )
}

export default TodoInp