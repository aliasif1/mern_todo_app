import useAuthContext from "./useAuthContext";
import useTaskContext from './useTaskContext';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch: taskDispatch} = useTaskContext();
    const onLogout = () => {
        // clear the task context state
        taskDispatch({
            type: 'SET_TASKS',
            payload: []
        });

        // remove from auth context
        dispatch({
            type: 'LOGOUT'
        });
        //remove from local storage
        localStorage.removeItem('user');
    }
    return {onLogout};
}