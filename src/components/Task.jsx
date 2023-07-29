import React from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const Task = (props) => {
  return (
    <div className={`task ${props.task.done ?"done" : ""}`}>
      {props.task.done ? 
        <FeatherIcon icon="check-circle" size={20} onClick={()=>props.toggleCheck(props.task)}/>:
        <FeatherIcon icon="circle" size={20} onClick={()=>props.toggleCheck(props.task)}/> 
      }
        <p>{props.task.task}</p>
        <div className="icons">
            <FeatherIcon icon="edit" size={17}/>
            <FeatherIcon icon="trash-2" size={17} onClick={()=>props.deleteTasks(props.task)}/>
        </div>
    </div>
  )
}

export default Task