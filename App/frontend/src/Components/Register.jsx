
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './All-CSS-files/Login.css'; 

const Register = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userData.name && userData.email && userData.password && userData.confirmPassword) {
      if (userData.password === userData.confirmPassword) {
        // You can perform registration logic here
        // For now, just displaying success message and navigating to login
        toast.success("Registration Successful..");
        router('/Login');
      } else {
        toast.error("Password and Confirm Password do not match");
      }
    } else {
      toast.error("All Fields are Required");
    }
  }

  return (
    <div className='Broder-Rg'>
       {/* <button className='ButtonOne' onClick={() => document.getElementById('id01').style.display = 'block'}>Register</button> */}
     {/* <div id="id01" className="modal"> */}
     {/* <span onClick={() => document.getElementById('id01').style.display = 'none'} className="close" title="Close Modal">&times;</span>  */}

      <form onSubmit={handleSubmit} className="modal-content animate">
        
      <div className="imgcontainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-QDDjwF50CeeLWq9geqzuR__x53t78qUZ9-iy4JuFjG9OXcktZDV5nJA2V9KjQ5T5Lg&usqp=CAU"
             alt="Avatar" className="avatar" />
          </div>
        <div className="container">
          <label>Name</label><br/>
          <input type="text" placeholder="Enter Name" name="name" value={userData.name} onChange={handleChange} required /><br/>
       
       
          <label>Email</label><br/>
          <input type="email" placeholder="Enter Email" name="email" value={userData.email} onChange={handleChange} required /><br/>
       
          <label>Password</label><br/>
          <input type="password" placeholder="Enter Password" name="password" value={userData.password} onChange={handleChange} required /><br/>
       
          <label>Confirm Password</label><br/>
          <input type="password" placeholder="Confirm Password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} required /><br/>
        
          <div className="container" style={{ backgroundColor: '#f1f1f1' }}></div>
          
          <button className='button' type="submit">Register</button><br/>
          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            {/* <button type="button"  onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button><br/> */}
           
          </div>
        </div>
      </form>
    </div>
    //  </div>
  );
};

export default Register;