import {useRef} from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [error, loading, onSignup] = useSignup();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const onFormSubmit = async (e) => {
        e.preventDefault();
        await onSignup(emailRef.current.value, passwordRef.current.value)
        emailRef.current.value = '';
        passwordRef.current.value = '';
    }

    return (
        <div className='container'>
            <div className='auth-container'>
                <h1 className='auth-title'>Sign Up</h1>
                <form className="auth-form" onSubmit={onFormSubmit}>
                    <div className='form-control'>
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input id="email" type="text" ref={emailRef} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input id="password" type="password" ref={passwordRef}/>
                    </div>
                    <div className='form-control'>
                        <button disabled={loading} type='submit' onClick={onFormSubmit}>Sign up</button>
                    </div>
                    {error && <p className='error-message'>{error}</p>}
                </form>
                <p className='toggle-auth-screen'>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup