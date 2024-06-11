



import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/NavbarCss.css';
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
    <div className='nav-1'>
      <div>
        {state?.user?.name && <h3>Hello :- {state.user.name}</h3>}
      </div>

      <div>
        <p onClick={() => router('/')}>Home</p>
        <input
          style={{
            height: "40%",
            border: "2px solid black",
            marginTop: "25px",
            width: "40%",
          }}
          placeholder="Search.."
        />
      </div>

      <div>
        <p onClick={() => router('/Add-To-Cart')}>Cart</p>
        
        <p onClick={() => router('/Register')}>Register</p>
        {/* <p onClick={() => router('/Login')}>Login</p> */}
        {state?.user?.role ? (
          <p onClick={Logout}>Logout</p>
        ) : (
          <p onClick={() => router('/Login')}>Login</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;