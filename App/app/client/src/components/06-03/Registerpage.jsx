
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
// import axios from "axios";
import api from "../../AxiosConfig";
import'../styles/Register.css'

function Register() {
 const router = useNavigate();
  const { state } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleSelect(event){
    setUserData({ ...userData, ["role"]: event.target.value });
    // console.log(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      if (userData.password !== userData.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      try {
        const response = await api.post("/api/v1/user/register", {
           userData,
        });
        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "buyer",
          });
          toast.success(response.data.message);
           router("/login");
        }
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred during registration.");
        }
      }
    } else {
      toast.error("All fields are required.");
    }
  }

  useEffect(() => {
    if (state && state?.user?.role !== undefined) {
      if (state?.user?.role === "buyer") {
        router("/");
      } else {
        router("/seller");
      }
    }
  }, [state]);

  return (
    <div className='Broder-Rg'>
      <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-QDDjwF50CeeLWq9geqzuR__x53t78qUZ9-iy4JuFjG9OXcktZDV5nJA2V9KjQ5T5Lg&usqp=CAU"
             alt="Avatar" className="avatar" />
        </div>

        <div className="container">
        <label>Name </label>
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email  </label>
        <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password </label>
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <br />
        <label>Confirm Password  </label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <select className="buySeller" onChange={handleSelect}>
           <option  value="buyer">Buyer</option>
           <option value="seller">Seller</option>
        </select>
        <br/>
        <input type="submit" value="Register" className='button'  />
        </div>
        {/* <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            {/* <button type="button"  onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button><br/> */}
            {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
          {/* </div> */}
      </form>
      <button className='button' onClick={()=> router("/login")}>Login?</button>
    </div>
    
  );
}

export default Register;