import { useState } from "react"

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState(false);
    const [error, setError] = useState(null);
    
    const saveTask = (e) => {
        e.preventDefault();
        if (text === ''){
            setError("Task field cannot be empty");
            return;
        }
        const task = {
            text,
            date,
            priority
        };

        onAddTask(task);
        setText('');
        setDate('');
        setPriority(false);
        error && setError(null);
    } 
    
    return (
    <form className="add-task" onSubmit={saveTask}>
        <h2>Add New Task</h2>
        <div className='form-control'>
            <label htmlFor="todo-text">Task:</label>
            <br />
            <input id="todo-text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label htmlFor="todo-date">Date:</label>
            <br />
            <input id="todo-date" type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label htmlFor="todo-priority">High Priority:</label>
            <input id="todo-priority" type="checkbox" checked={priority} onChange={(e) => setPriority(e.target.checked)}/>
        </div>
        <div className='form-control'>
            <button type='submit'>Save</button>
        </div>
        {error && <p className='error-message'>{error}</p>}
    </form>
  )
}

export default AddTask