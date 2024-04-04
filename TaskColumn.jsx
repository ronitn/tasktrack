import React from 'react';

import Todo from "../assets/direct_hit.jpeg";
import "./TaskColumn.css";
import TaskCard from './TaskCard';
const TaskColumn = ({TaskName,icon,tasks,status,handleDelete}) => {
    console.log(Todo);
  return (
    <section className='task_column'>

        <h2 className='task_column_heading'> <img className='task_column_img' 
        src={icon} alt=''/>{TaskName}</h2>
        {
          tasks.map((task, index) => task.status === status &&
         <TaskCard
          key={index}
          title={task.task}
          tags={task.tags}
          handleDelete={handleDelete}
          index={index}
          />)
          }
    
    </section>
    )
}

export default TaskColumn