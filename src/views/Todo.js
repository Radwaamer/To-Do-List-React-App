import React, { useState } from 'react'
import Title from './../components/Title';
import Form from '../components/Form';
import { initialData } from './data/data';

const Todo = () => {
  const [data,setData]=useState(initialData);

  const toggleCheck=(task)=>{
    setData(()=>{
      const newData=data.map(dt=>{
        if(task.id==dt.id){
          return({...dt,done:!dt.done})
        }
        return dt;
      })
      return newData;
    })
  }

  const addTasks=(task)=>{
    setData([
      {id:Date.now(),task:task,done:false},
      ...data
    ]);
  }

  const deleteTasks=(task)=>{
    setData(()=>{
      return data.filter(dt=>{
        return dt.id!==task.id
      })
    })
  }

  return (
    <section>
      <div className="container">
        <Title data={data.length}/>
        <Form 
        data={data}
        toggleCheck={toggleCheck}
        addTasks={addTasks}
        deleteTasks={deleteTasks}/>
      </div>
    </section>
  )
}

export default Todo