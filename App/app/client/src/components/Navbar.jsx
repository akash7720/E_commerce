
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/NavbarCss.css';
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from './Context/AuthContext';
import api from '../AxiosConfig';
import toast from 'react-hot-toast';


const Navbar = () => {
  const router = useNavigate();
  const { state, LOGOUT } = useContext(AuthContext);

  const Logout = async () => {
    try {
      const response = await api.get('/api/v1/user/logout');
      if (response.data.success) {
        LOGOUT();
        toast.success(response.data.message);
        router('/'); // Optionally navigate to home or login page after logout
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='First-nav'>Welcome To your Website</div>
      
      <div className='nav-parent'>
        <div className='Left-nav'>
        <h3> Hey!__ {state?.user?.name}</h3>
          <h3 onClick={() => router('/')}>Home</h3>
         
        </div>
        
        {/* <div className='Middle-nav'>
          <input type="text" name="search" className='Search' placeholder="Search.." />
        </div> */}

<div className='Middle-nav'>
  <input type="text" name="search" className='Search' placeholder="Search.." />
</div>
        <div className='Right-nav'>
          <div className='R-one'>
          <p onClick={() => router('/Add-To-Cart')}>Cart</p>
            <p onClick={() => router('/Register')}>Register</p>
            {state?.user?.role?(
              <p onClick={Logout}>Logout</p>
            ) : (
              <p onClick={() => router('/login')}>Login</p>
            )}
          </div>
          <div className='R-two'>
            <div><FaUserCircle /></div>
            <div ><FiShoppingCart  /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;