  
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import toast from "react-hot-toast"
import {useNavigate} from 'react-router-dom'

const BuyerProtected = () => {
    const router =useNavigate();
    const {state}=useContext(AuthContext)
  
   useEffect(()=>{
     if(state && state.role !=="buyer"){
       toast.error("you are not allow to access this page.");
        return router('/login')
     }
   },[state]);
  }

export default BuyerProtected