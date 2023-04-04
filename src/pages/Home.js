import {useEffect} from 'react'
import AddTask from '../components/AddTask';
import Tasks from '../components/Tasks';
import useTaskContext from '../hooks/useTaskContext';
import useAuthContext from '../hooks/useAuthContext';
import Navbar from '../components/Navbar';
import HTTPRequest from '../api/http';

const Home = () => {
  const {user} = useAuthContext();
  const {tasks, dispatch} = useTaskContext();
      
  // Api call to fetch all tasks
  useEffect(() => {
    const getAllTasks = async () => {
      const authToken = user.token;
      const res = await HTTPRequest.getAllTasks(authToken);
      if (res.ok) {
        const fetchedTasks = await res.json();
        dispatch({type: 'SET_TASKS', payload: fetchedTasks});
      }
    }
    // if no user send no request
    if(user){
      getAllTasks();
    }
  }, [dispatch, user])
    
  // Add a new task
  const addTask = async (task) => {
    if(!user){
      console.log('User must be logged in to perform this action');
      return;
    }
    const authToken = user.token;
    const res = await HTTPRequest.createNewTask(task, authToken);
    if (res.ok) {
      const savedTask = await res.json();
      dispatch({type: 'CREATE_NEW_TASK', payload: savedTask});
    }
  }
      
  // delete a task
  const deleteTask = async (id) => {
    if(!user){
      console.log('User must be logged in to perform this action');
      return;
    }
    const authToken = user.token;
    const res = await HTTPRequest.deleteTask(id, authToken);
    if (res.ok) {
      const deletedTask = await res.json();
      dispatch({type: 'DELETE_TASK', payload: deletedTask});
    }
  }
    
  //toggle priority for a task
  const toggleTaskPriority = async (task) => {
    if(!user){
      console.log('User must be logged in to perform this action');
      return;
    }
    const authToken = user.token;
    const payload = {priority: !task.priority};
    const res = await HTTPRequest.toggleTaskPriority(task._id, payload, authToken);
    if (res.ok) {
      const taskToEdit = await res.json();
      dispatch({type: 'TOGGLE_TASK_PRIORITY', payload: taskToEdit});
    }
  }
    
  return (
    <div className='home-container'>
      <div className='tasks-container'>
        <Navbar />
        <AddTask onAddTask={addTask}/>
        <Tasks tasks={tasks} onDeleteTask={deleteTask} onToggleTaskPriority={toggleTaskPriority}/>
      </div>
    </div>
  );
}

export default Home