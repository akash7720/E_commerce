 
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
// import axios from "axios";
import api from "../AxiosConfig";
import './styles/Login.css'

function Login() {
  const { LOGIN, state } = useContext(AuthContext);

  const router = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });
  console.log(userData, "userData");
  // userData.name
  // userData[name]

  function handleChange(event) {
    // console.log(event.target.value, event.target.name)
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.email && userData.password) {
      // await calling backend one server to another server request, backend validation, data to store mongodb
      try {
        const response = await api.post(
          "/api/v1/user/login",{ userData },);
        // const response = { data: { success: true, message: "Login Sucessfull.", token: "abcdefghi", userData: { name: 'Awdiz', email: "awdiz@gmail.com" } } }
        // return res.status(201).json({ success: true, message: "Registeration Completed." })
        if (response.data.success) {
          // localStorage.setItem("token", JSON.stringify(response.data.token))
          LOGIN(response.data.userData);
          setUserData({ email: "", password: "" });
          toast.success(response.data.message);
          router("/");
        }else{
          toast.error(response.data.message)
        }

        
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      alert("All fields are required.");
    }
  }

  useEffect (()=>{
    console.log(state);
    if(state && state?.user?.role !== undefined){
      if(state?.user?.role === 'buyer'){
        router("/");
      }else {
        router("/seller");
      }
    }
  },[state])

  return (
    <div className='Broder-Rg'>
      
      <form onSubmit={handleSubmit} className="modal-content animate">
      <div className="imgcontainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-QDDjwF50CeeLWq9geqzuR__x53t78qUZ9-iy4JuFjG9OXcktZDV5nJA2V9KjQ5T5Lg&usqp=CAU"
             alt="Avatar" className="avatar" />
        </div>

        <div className="container"> 
        <label>Email : </label>
        <br />
        <input
          style={{ border: "1px solid red" }}
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Login" className='button' />
        </div>
        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            {/* <button type="button"  onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button><br/> */}
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
          <button className='button' onClick={()=> router("/register")}>Register?</button>
      </form>

 

    </div>
  );
}

export default Login;
