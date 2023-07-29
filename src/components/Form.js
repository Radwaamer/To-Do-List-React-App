import React from 'react'
import TodoInp from './TodoInp'
import Tasks from './Tasks';

const Form = (props) => {
  

  return (
    <div className="form">
      <TodoInp addTasks={props.addTasks}/>
      <Tasks 
      data={props.data}
      toggleCheck={props.toggleCheck}
      deleteTasks={props.deleteTasks}/>
    </div>
  )
}

export default Form
