import React,{useState,useEffect}from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from './assets/direct_hit.jpeg';
import doingIcon from './assets/star.jpeg';
import doneIcon from './assets/right_click.jpg';
const oldTasks= localStorage.getItem("tasks")
console.log(oldTasks)
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(()=> {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])


  const handleDelete = (taskIndex) => {
     const newTasks= tasks.filter((task ,index) => index !==taskIndex) 
     setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
    <main className='app_main'>
      <TaskColumn TaskName="To do" icon={todoIcon} tasks={tasks}
      status="todo" 
      handleDelete={handleDelete}/>
      <TaskColumn TaskName="Doing" icon={doingIcon} tasks={tasks}
      status="doing" 
      handleDelete={handleDelete}/>
      <TaskColumn TaskName="Done" icon={doneIcon} tasks={tasks}
      status="done" 
      handleDelete={handleDelete}/>
      </main>
    </div>
  )             
}
export default App
