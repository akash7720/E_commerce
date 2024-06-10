

import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './All-CSS-files/Login.css'
import { AuthContext } from "./Context/AuthContext";


function Register() {

    const router = useNavigate();
  
    const {state} = useContext(AuthContext);
   

    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    
    console.log(userData, "userData")

    function handleChange(event) {
        // console.log(event.target.value, event.target.name)
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (userData.name && userData.email && userData.password && userData.confirmPassword) {
            // await calling backend one server to another server request, backend validation, data to store mongodb
            try {
                const response = await axios.post('http://localhost:3001/api/v1/auth/register', { userData })
                // const response = { data: { success: true, message: "Registeration Completed." } }
                // return res.status(201).json({ success: true, message: "Registeration Completed." })
                if (response.data.success) {
                    setUserData({ name: "", email: "", password: "", confirmPassword: "" })
                    toast.success(response.data.message)
                    router('/Login')
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            alert("All fields are required.")
        }
    }

    return (
        <div className='Broder-Rg'>
            <form onSubmit={handleSubmit}  className="modal-content animate">

            <div className="imgcontainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-QDDjwF50CeeLWq9geqzuR__x53t78qUZ9-iy4JuFjG9OXcktZDV5nJA2V9KjQ5T5Lg&usqp=CAU"
             alt="Avatar" className="avatar" />
          </div>

              <div  className="container">
                  <label>Name  </label><br />
                <input type="text" name="name" value={userData.name} onChange={handleChange} required /><br />
                <label>Email  </label><br />
                <input type="email" name="email" value={userData.email} onChange={handleChange} required /><br />
                <label>Password  </label><br />
                <input type="password" name="password" value={userData.password} onChange={handleChange} required /><br />
                <label>Confirm Password </label><br />
                <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} required /><br />
                <input type="submit" className='button' value="Register" />
                <input type="submit" className='button' value="Login" onClick={ ()=>router('/Login')} />
                </div>
                

                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>

            {/* <button type="button"  onClick={() => document.getElementById('id01').style.display = 'none'} className="cancelbtn">Cancel</button><br/> */}
           
          </div>

            </form>
        </div>
    )
}

export default Register;

// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import api from "../AxiosConfig";
// import { AuthContext } from "./Context/AuthContext";


// function Register() {
//   const router = useNavigate();
//   const { state } = useContext(AuthContext);

//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "buyer",
//   });
//   // userData.name
//   // userData[name]
//   console.log(userData, "userData");

//   function handleChange(event) {
//     // console.log(event.target.value, event.target.name)
//     setUserData({ ...userData, [event.target.name]: event.target.value });
//   }

//   function handleSelect(event) {
//     setUserData({ ...userData, ["role"]: event.target.value });
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     if (
//       userData.name &&
//       userData.email &&
//       userData.password &&
//       userData.confirmPassword
//     ) {
//       // await calling backend one server to another server request, backend validation, data to store mongodb
//       try {
//         const response = await api.post("/api/v1/user/register", {
//           userData,
//         });
//         // const response = { data: { success: true, message: "Registeration Completed." } }
//         // return res.status(201).json({ success: true, message: "Registeration Completed." })
//         if (response.data.success) {
//           setUserData({
//             name: "",
//             email: "",
//             password: "",
//             confirmPassword: "",
//             role: "buyer",
//           });
//           toast.success(response.data.message);
//           router("/login");
//         }
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }
//     } else {
//       alert("All fields are required.");
//     }
//   }

//   useEffect(() => {
//     if (state && state?.user?.role !== undefined) {
//       if (state?.user?.role === "buyer") {
//         router("/");
//       } else {
//         router("/seller");
//       }
//     }
//   }, [state]);

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name : </label>
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={userData.name}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Email : </label>
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={userData.email}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Password : </label>
//         <br />
//         <input
//           type="password"
//           name="password"
//           value={userData.password}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Confirm Password : </label>
//         <br />
//         <input
//           type="password"
//           name="confirmPassword"
//           value={userData.confirmPassword}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <select onChange={handleSelect}>
//           <option value="buyer">Buyer</option>
//           <option value="seller">Seller</option>
//         </select>
//         <br />
//         <input type="submit" value="Register" />
//       </form>
//       <button onClick={() => router("/login")}>Login ?</button>
//     </div>
//   );
// }

// export default Register;