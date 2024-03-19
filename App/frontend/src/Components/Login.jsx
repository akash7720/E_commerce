import React, { useState } from 'react'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const router = useNavigate();
   const [userData,setUserData]=useState({email:"",password:""});
 console.log(userData,"userData")

   function hendleChange(event){
      setUserData({...userData,[event.target.name]:event.target.value})

   }

   function handleSubmit(event){
       event.preventDefault();
       if( userData.email && userData.password ){
          toast.success("Login Successfual..")
          router('/')
          toast.success("Wellcome your WedPage...")
       }else{
        toast.error("All Fildes Are Requared")
       }
   }
  return (
    <div>
        <h1>Login From</h1>

        <form onSubmit={handleSubmit}>
        <label>Email</label><br/>
        <input type="email" onChange={hendleChange} name="email"/><br/>
        <label>Password</label><br/>
        <input type="password" onChange={hendleChange} name="password"/><br/>
        <input type="submit" value="Login"/><br/>
        </form>
    </div>
  )
}

export default Login