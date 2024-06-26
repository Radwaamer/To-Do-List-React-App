import React from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const Task = (props) => {
  return (
    <div className={`task ${props.task.done ?"done" : ""}`}>
        <FeatherIcon icon={props.task.done?"check-circle":"circle"} size={20} onClick={()=>props.toggleCheck(props.task)}/>
        <p>{props.task.task}</p>
        {props.mode !="edit" &&
          <div className="icons">
              <FeatherIcon icon="edit" size={17} onClick={()=>props.editTasks(props.task)}/>
              <FeatherIcon icon="trash-2" size={17} onClick={()=>props.deleteTasks(props.task)}/>
          </div>
        }
    </div>
  )
}

export default Task