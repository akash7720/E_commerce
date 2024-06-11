
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// import axios from "axios";
import api from "../../AxiosConfig";
import { AuthContext } from "../Context/AuthContext";

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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email : </label>
        <br />
        <input
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
        <label>Confirm Password : </label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <select onChange={handleSelect}>
           <option value="buyer">Buyer</option>
           <option value="seller">Seller</option>
        </select>
        <br/>
        <input type="submit" value="Register" />
      </form>
      <button onClick={()=> router("/login")}>Login?</button>
    </div>
    
  );
}

export default Register;