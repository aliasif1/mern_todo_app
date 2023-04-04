import {useState} from 'react';
import HTTPRequest from '../api/http';
import useAuthContext from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {dispatch} = useAuthContext();

    const onLogin = async (email, password) => {
        setLoading(true);
        setError(false);
        try{
            const res = await HTTPRequest.userLogin(email, password);
            const json = await res.json();
            if (!res.ok){
                setError(json.error);
                setLoading(false);
            }
            if (res.ok){
                // save to local storage
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({
                    type: 'LOGIN',
                    payload: json
                });
                setError(null)
                setLoading(false);

            }
        }
        catch(e){
            setLoading(false);
            setError(e.error);
        }
    }

    return [error, loading, onLogin];
    
}
