import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const useTaskContext = () => {
    const context = useContext(TaskContext);
    if(!context){
        throw Error('Context not available');
    }
    return context;
}

export default useTaskContext;