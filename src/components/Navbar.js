import useAuthContext from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const {user} = useAuthContext();
  const {onLogout} = useLogout();

  const handleLogout = () => {
    onLogout();
  }
  
  return (
    <div className='navbar'>
      <div className='navbar-title'>Task Manager</div>
      <div className='navbar-content'>
        {user && 
        <div className='nav-item'>{user.email}</div>
        }
        {user && 
        <button className='nav-item logout-btn' onClick={handleLogout}>Logout</button>
        }
      </div>      
    </div>
  )
}

export default Navbar
