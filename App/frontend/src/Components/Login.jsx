import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './All-CSS-files/Login.css'; 

const Login = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({ Email: "", psw:""});

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userData.Email && userData.psw) {
      toast.success("Login Successful..");
      router('/');
      toast.success("Welcome to your Web Page...");
    } else {
      toast.error("All Fields Are Required");
    }
  }

  return (
    <div className='Broder-Rg'>
      {/* <button className='ButtonOne' onClick={() => document.getElementById('id01').style.display = 'block'}>Login</button> */}

      {/* The Modal */}
      {/* <div id="id01" className="modal">
        <span onClick={() => document.getElementById('id01').style.display = 'none'} className="close" title="Close Modal">&times;</span> */}

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="modal-content animate">
          <div className="imgcontainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-QDDjwF50CeeLWq9geqzuR__x53t78qUZ9-iy4JuFjG9OXcktZDV5nJA2V9KjQ5T5Lg&usqp=CAU"
             alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label >Email</label><br/>
            <input type="Email" placeholder="Enter Email" name="Email" onChange={handleChange} required /><br/>

            <label>Password</label><br/>
            <input type="password" placeholder="Enter Password" name="psw" onChange={handleChange} required /><br/>

            <button className='button' type="submit">Login</button><br/>
            <label>
              <input type="checkbox" defaultChecked name="remember" /> Remember me
            </label>
          </div>

          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            {/* <button type="button"  onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button><br/> */}
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
    // </div>
  );
};

export default Login;



