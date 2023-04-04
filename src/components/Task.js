import React from 'react'
import {MdOutlineDone} from 'react-icons/md'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineFieldTime} from 'react-icons/ai'

const Task = ({task, onDeleteTask, onToggleTaskPriority}) => {
  return (
    <div className={`task-item ${task.priority && 'priority'}`} onDoubleClick={() => onToggleTaskPriority(task)}>
        <div className='task-description'>
            <h4 className='task-text'>{task.text}</h4>
            <h5 className='task-date'>{task.date}</h5>
        </div>
        <div className='task-options'>
            {task.priority && <AiOutlineFieldTime className='task-option-icon' onClick={() => onToggleTaskPriority(task)}/>}
            <BsTrash className='task-option-icon' onClick={() => onDeleteTask(task._id)}/>
            <MdOutlineDone className='task-option-icon' onClick={() => onDeleteTask(task._id)}/>
        </div>
    </div>
  )
}

export default Task
