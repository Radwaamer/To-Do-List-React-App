import React, { useEffect, useState } from 'react'
import Title from './../components/Title';
import Form from '../components/Form';

const Todo = () => {
  // const initialData=localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[];

  // const [data,setData]=useState(initialData);
  const [data,setData]=useState([]);
  const [mode,setMode]=useState("add");
  const [editTask,setEditTask]=useState([]);

  // update code
  const getData= ()=>{
    fetch("https://todo-api-jla2.onrender.com/tasks")
    .then(res=>res.json())
    .then(data=>setData(data));
  };

  // update code
  useEffect(()=>{
    getData();
  },[])

  const toggleCheckk=(task)=>{
    if(mode=="edit"){
      return
    }else{
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
  }

  // update code
  const toggleCheck=(task)=>{
    fetch(`https://todo-api-jla2.onrender.com/tasks/${task.id}`,{
      method:'PATCH',
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({"done":!task.done})
    })
    .then(res=>res.json())
    .then(toggleCheckk(task));
  }

  const addTaskss=(task)=>{
    setData([
      {id:Date.now(),task:task,done:false},
      ...data
    ]);
  }

  // update code
  const addTasks=(task)=>{
    fetch("https://todo-api-jla2.onrender.com/tasks",{
      method:'POST',
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({"id":String(Date.now()),"task":task,"done":false})
    })
    .then(res=>res.json())
    .then(addTaskss(task));
  }

  const deleteTaskss=(task)=>{
    setData(()=>{
      return data.filter(dt=>{
        return dt.id!==task.id
      })
    })
  }

  // update code
  const deleteTasks=(task)=>{
    fetch(`https://todo-api-jla2.onrender.com/tasks/${task.id}`,{
      method:'DELETE',
      headers:{
        "Content-Type": "Application/JSON"
      }
    })
    .then(res=>res.json())
    .then(deleteTaskss(task));
  }

  const toggleTasks = ()=>{
    if(mode=="edit") return;
    mode == "add" ? setMode("filter"): setMode("add");
  }

  let currentData=[...data];
  if(mode == "filter") currentData=data.filter(dt=>!dt.done);

  const editTasks = (task)=>{
    setMode("edit");
    setEditTask(task);
  };

  if(mode == "edit") currentData=[editTask];

  const editedTaskk=(value)=>{
    setData(()=>{
      const newData=data.map(dt=>{
        if(editTask==dt){
          return({...dt,task:value})
        }
        return dt;
      })
      return newData;
    })
    setMode("add")
  }

  // update code
  const editedTask=(value)=>{
    console.log(editTask.id)
    fetch(`https://todo-api-jla2.onrender.com/tasks/${editTask.id}`,{
      method:'PATCH',
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({"task": value})
    })
    .then(res=>res.json())
    .then(editedTaskk(value));
  }

  // localStorage.setItem("todos",JSON.stringify(data));

  return (
    <section>
      <div className="container">
        <Title data={data.length}/>
        <Form 
        data={currentData}
        toggleCheck={toggleCheck}
        addTasks={addTasks}
        deleteTasks={deleteTasks}
        toggleTasks={toggleTasks}
        mode={mode}
        editTasks={editTasks}
        editTask={editTask}
        editedTask={editedTask}/>
      </div>
    </section>
  )
}

export default Todo