import React from 'react'
import Task from './Task'

const Tasks = (props) => {
  

  return (
    <div className="tasks">
      {props.data.map(task=>{
        return<div key={task.id}>
        <hr />
        <Task task={task} 
        toggleCheck={props.toggleCheck}
        deleteTasks={props.deleteTasks}
        editTasks={props.editTasks}
        mode={props.mode}/>
        </div>
      })}
    </div>
  )
}

export default Tasks