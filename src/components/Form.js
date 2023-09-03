import React from 'react'
import TodoInp from './TodoInp'
import Tasks from './Tasks';

const Form = (props) => {
  return (
    <div className="form">
      <TodoInp 
      addTasks={props.addTasks}
      toggleTasks={props.toggleTasks}/>
      {props.data.length==0 ? 
      <h3 className='no-data'>No Tasks To Show ...</h3> :
      <Tasks 
      data={props.data}
      toggleCheck={props.toggleCheck}
      deleteTasks={props.deleteTasks}/>
      }
    </div>
  )
}

export default Form
