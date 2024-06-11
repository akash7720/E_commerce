import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import toast from "react-hot-toast"
import {useNavigate} from 'react-router-dom'

const SellerProtected = ({children}) => {
  const router =useNavigate();
  const {state}=useContext(AuthContext)

 useEffect(()=>{
   if(state?.user && state?.user?.role !=="seller"){
     toast.error("you are not allow to access this page.");
       router('/login')
   }
 },[state]);
 return children;
}

export default SellerProtected;