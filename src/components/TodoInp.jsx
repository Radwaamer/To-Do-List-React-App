import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React, { useEffect, useState } from 'react'

const TodoInp = ({addTasks,toggleTasks,mode,editTask,editedTask}) => {
  const [value,setValue]=useState("");
  useEffect(()=>{
    if(editTask.task){
      setValue(editTask.task)
    }
  },[editTask]);
  

  return (
    <div className="todo-input">
      <FeatherIcon className={mode=="filter"?"active":""} icon={`${mode=="filter"?"minus-circle":"circle"}`} size={20} onClick={toggleTasks}/>
      <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Add New Task...' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit" disabled={!value.trim()} onClick={()=>{
          mode=="edit"? editedTask(value.trim()) : addTasks(value.trim());
          setValue("")}}>{mode=="edit"?"EDIT":"ADD"}</button>
      </form>
    </div>
  )
}

export default TodoInp