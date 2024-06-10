// import React, { useContext, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import './All-CSS-files/Login.css'; 
// import axios from 'axios';
// import { AuthContext } from './Context/AuthContext';

// const Login = () => {
//   const { LOGIN, state } = useContext(AuthContext);
//   const router = useNavigate();
//   const [userData, setUserData] = useState({ email: "", password: "" });

//   function handleChange(event) {
    
//     setUserData({ ...userData, [event.target.name]: event.target.value });
//   }
//   async function handleSubmit(event) {
//     event.preventDefault();
//     if (userData.email && userData.password) {
     
//       try {
//         const response = await axios.post('http://localhost:3001/api/v1/auth/login', { userData });
        
//         if (response.data.success) {
        
//           LOGIN(response.data.userData);
//           setUserData({ email: "", password: "" });
//           toast.success(response.data.message);
       
//           router("/");
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         console.log(error, "error in login");
       
//       }
//     } else {
//       alert("All fields are required.");
//     }
//   }


//   useEffect(() => {
//     console.log(state);
//     if (state && state?.user?.role !== undefined) {
//       if (state?.user?.role === "buyer") {
//         router("/");
//       } else {
//         router("/seller");
//       }
//     }
//   }, [state]);

//   return (
//     <div className='Broder-Rg'>
//       {/* <button className='ButtonOne' onClick={() => document.getElementById('id01').style.display = 'block'}>Login</button> */}

//       {/* The Modal */}
//       {/* <div id="id01" className="modal">
//         <span onClick={() => document.getElementById('id01').style.display = 'none'} className="close" title="Close Modal">&times;</span> */}

//         {/* Modal Content */}
//         <form onSubmit={handleSubmit} className="modal-content animate">
//           <div className="imgcontainer">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-QDDjwF50CeeLWq9geqzuR__x53t78qUZ9-iy4JuFjG9OXcktZDV5nJA2V9KjQ5T5Lg&usqp=CAU"
//              alt="Avatar" className="avatar" />
//           </div>

//           <div className="container">
//             <label >Email</label><br/>
//             <input type="Email" placeholder="Enter Email" name="Email" onChange={handleChange} required /><br/>

//             <label>Password</label><br/>
//             <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required /><br/>

//             <button className='button' type="submit">Login</button><br/>
//              <input type="submit" className='button' value="Register" onClick={ ()=>router('/Register')} />
            
//           </div>

//           <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
//             {/* <button type="button"  onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button><br/> */}
//             <span className="psw">Forgot <a href="#">password?</a></span>
//           </div>
//         </form>
//       </div>
//     // </div>
//   );
// };

// export default Login;


import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './All-CSS-files/Login.css'; 
import axios from 'axios';
import { AuthContext } from './Context/AuthContext';

const Login = () => {
  const { LOGIN, state } = useContext(AuthContext);
  const router = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      try {
        const response = await axios.post('http://localhost:3001/api/v1/auth/login', userData);
        if (response.data.success) {
          LOGIN(response.data.userData);
          setUserData({ email: "", password: "" });
          toast.success(response.data.message);
          router("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error in login:", error);
        toast.error("An error occurred during login. Please try again.");
      }
    } else {
      alert("All fields are required.");
    }
  };

  useEffect(() => {
    if (state?.user?.role !== undefined) {
      if (state.user.role === "buyer") {
        router("/");
      } else {
        router("/seller");
      }
    }
  }, [state, router]);

  return (
    <div className='Broder-Rg'>
      <form onSubmit={handleSubmit} className="modal-content animate">
        <div className="imgcontainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-QDDjwF50CeeLWq9geqzuR__x53t78qUZ9-iy4JuFjG9OXcktZDV5nJA2V9KjQ5T5Lg&usqp=CAU"
            alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label>Email</label><br/>
          <input type="email" placeholder="Enter Email" name="email" value={userData.email} onChange={handleChange} required /><br/>

          <label>Password</label><br/>
          <input type="password" placeholder="Enter Password" name="password" value={userData.password} onChange={handleChange} required /><br/>

          <button className='button' type="submit">Login</button><br/>
          <button type="button" className='button' onClick={() => router('/Register')}>Register</button>
        </div>

        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  );
};

export default Login;