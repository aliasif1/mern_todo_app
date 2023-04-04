import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw Error('Auth Context not available');
    }
    return context;
}

export default useAuthContext;