import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDeleteTask, onToggleTaskPriority}) => {
  return (
    tasks.length === 0 ? <div className='no-task-message'>No pending tasks to show</div> : tasks.map((task, index) => <Task key={task._id} task={task} onDeleteTask={onDeleteTask} onToggleTaskPriority={onToggleTaskPriority}/>)
  );
}

export default Tasks