import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const manageTasksReducer = (state, action) => {
    switch(action.type){
        case 'SET_TASKS':
            return {
                tasks: [...action.payload]
            }
        case 'CREATE_NEW_TASK':
            return {
                tasks: [action.payload, ...state.tasks]
            }
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter((task) => task._id !== action.payload._id)
            }
        case 'TOGGLE_TASK_PRIORITY':
            const allTasks = [...state.tasks]
            const taskToToggle = allTasks.find((task) => task._id === action.payload._id)
            taskToToggle.priority = !taskToToggle.priority;
            return {
                tasks: allTasks
            }
        default:
            return state;
    }
}

export const TaskContextProviderComponent = ({children}) => {
    const [state, dispatch] = useReducer(manageTasksReducer, {tasks: []});
    return (
        <TaskContext.Provider value={{...state, dispatch}} >
            {children}
        </TaskContext.Provider>
    );
}
