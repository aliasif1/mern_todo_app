const apiPath = `${process.env.REACT_APP_BACKEND_URL}/api`
class HTTPRequest {
    // on user sign up
    static userSignup = async (email, password) => {
        try{
            const res = await fetch(`${apiPath}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            });
            return res;
        }
        catch(e){
            console.log({error: e.message});
            return e;
        }
    }

    // on user login
    static userLogin = async (email, password) => {
        try{
            const res = await fetch(`${apiPath}/auth/login`, {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return res;
        }
        catch(e){
            console.log({error: e.message});
            return e;
        }
    }
    
    // get all tasks
    static getAllTasks = async (token) => {
        try{
            const res = await fetch(`${apiPath}/tasks`, {
                headers:{
                    "authorization": 'Bearer ' + token
                }
            });
            return res;
        }
        catch(e){
            console.log({error: e.message});
        }
    }

    // create a new task
    static createNewTask = async (task, token) => {
        try{
            const res = await fetch(`${apiPath}/tasks`, {
                method: "POST",
                body: JSON.stringify(task),
                headers: {
                    "Content-Type": "application/json",
                    "authorization": 'Bearer ' + token
                }
            });
            return res;
        }
        catch(e){
            console.log({error: e.message});
        }
    }

    //delete a task 
    static deleteTask = async (id, token) => {
        try{
            const res = await fetch(`${apiPath}/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    "authorization": 'Bearer ' + token
                }
            });
            return res;
        }
        catch(e){
            console.log({error: e.message});
        }
    }

    //toggle task priority 
    static toggleTaskPriority = async (id, payload, token) => {
        try{
            const res = await fetch(`${apiPath}/tasks/${id}`, 
            {
                method: "PATCH",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    "authorization": 'Bearer ' + token
                }
            });
            return res;
        }
        catch(e){
            console.log({error: e.message});
        }
    }
}

export default HTTPRequest;