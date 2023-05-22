import React, {useState, useEffect} from 'react';
import Task from './Task';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const [inputTask, setInputTask] = useState('')

  useEffect(()=>{
    fetchTasks();
  }, [])

  const fetchTasks=async()=>{
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const fetchData = await res.json();
      const tasks = fetchData.slice(0, 5);
      setTasks(tasks);
      console.log('tasks', tasks)
  
    }
    catch(err){
      console.log(err);
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTask={
      id: Math.random(),
      title: inputTask,
      completed: false,
      userId:1
    }
    setTasks([...tasks, newTask]);
    setInputTask('')
  }

  const updateTask = (id, newTitle) =>{
    const updatedTasks = tasks.map(task=>task.id===id ? {...task, title: newTitle} : task);
    setTasks(updatedTasks)
  }

  return (
    <div style={{margin: "auto"}}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', margin: "40px 0", justifyContent: "center" }}>
        <input 
        value={inputTask} 
        onChange={(e)=>setInputTask(e.target.value)} 
        type="text" 
        className="form-control" 
        style={{ width: "300px", margin: '0 20px 0 0'}}/>
        <button type="submit" className='btn btn-success'>Create Task</button>

      </form>
      {tasks.map((task)=><div key={task.id}>
        <Task task={task} updateTask={updateTask}/>
        </div>)}

    </div>
  )
}

export default ToDoList
