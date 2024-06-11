import React, { useState } from 'react'

const Test = () => {
  const[userData,setUserData]=useState({name:"", email:"",password:"",ConfirmPassword:""})
 console.log(userData,"userData")

  function handleChange(event){
    setUserData({...userData,[event.target.name]:event.target.value})
  }

  function handleSubmit(event){
       event.preventDefault();
       if(userData.name && userData.email && userData.password && userData.ConfirmPassword){
        if(userData.password === userData.ConfirmPassword){

         

          try {
            const response ={data:{succcess:true,message:("Registeration Successfull")}}
            if(response.data.succcess){
                alert(response.data.message)
                setUserData({name:"", email:"",password:"",ConfirmPassword:""})
            }
            
          } catch (error) {
            console.log(error.response.data.message)
          }

        }else{
           alert("password & confirmpassword are not match")
           
        }

       }else{
          alert("All Fildes are Requared")
       }
  }
  return (
    <div>
      
        <form onSubmit={handleSubmit} >
        <h1>testing Register form</h1>
          <label>Name</label><br/>
          <input type="text"  onChange={handleChange}value={userData.name} name="name" /><br/>
          <label>Email</label><br/>
          <input type="email"  onChange={handleChange} value={userData.email} name="email" /><br/>
          <label>Password</label><br/>
          <input type="password" onChange={handleChange} value={userData.password} name="password" /><br/>
          <label>ConfirmPassword</label><br/>
          <input type="password" onChange={handleChange} value={userData.ConfirmPassword} name="ConfirmPassword" /><br/>
          <input type="submit" value="Register"/><br/>
        </form>
    </div>
  )
}

export default Test