import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Register = () => {
const router= useNavigate()
  const [userData, setUserData]=useState({name:"", email:"",password:"", ConfirmPassword:""})
  console.log(userData,"userData")
  
  function handleChange(event){
  //  console.log( event.target.value, event.target.name)
      setUserData({...userData,[event.target.name]:event.target.value})

  }
    
  function handleSubmit(event){
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.ConfirmPassword){
        if(userData.password === userData.ConfirmPassword){
          // const response = await axios.post("http://localhost:8080/login",{userData})
          
          try{
            const response={data:{success:true,massage:"registeration successfual"}}
            if(response.data.success){
                    toast.success(response.data.massage)
                  setUserData({name:"", email:"",password:"", ConfirmPassword:""})
                  router('/Login')
            } 
          }catch(error){
             toast.error(error.response.data.massage)
          }
        }else{
            toast.error("passsword and confirmpassword not match")
        }
        }else{
             toast.error("All Fildes are Requared ")
        }
  }
  return (
    <div>
      <h1>Register</h1>
         <form onSubmit={handleSubmit}>
              <label>Name</label><br/>
              <input type="text" onChange={handleChange} value={userData.name} name="name" /><br/>

              <label>Email</label><br/>
              <input type="email" onChange={handleChange} value={userData.email} name="email" /><br/>

              <label>password</label><br/>
              <input type='password' onChange={handleChange} value={userData.password} name="password" /><br/>

              <label>ConfirmPassword</label><br/>
              <input type="password" onChange={handleChange} value={userData.ConfirmPassword} name="ConfirmPassword" /><br/>

              <input type='submit' value="Register"/>
         </form>

   
    </div>
  )
}


export default Register