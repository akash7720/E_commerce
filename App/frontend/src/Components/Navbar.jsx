import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import'./All-CSS-files/Navbar.css'
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
    const router = useNavigate();

    const [showMenu,setShowMenu]=useState(false)
  return (
   
    <div >
     
      <div className='First-nav'>WellCome To your Wedsite</div>
      
          <div className='nav-parent'>
             
             <div className='Left-nav'>
                 {/* LOGO */}
             </div>
              
              <div className='MIddel-nav'>
                <input type="text" placeholder="Search..."></input>
              <p onClick={ ()=>router('/')}>Home</p>
              
             
              </div>
 
              <div className='Right-nav'>
                    <div className='R-one'>
                     <p onClick={ ()=>router('/Login')}>Login</p>
                      <p onClick={ ()=>router('/Register')}>Register</p> 
                     
                    </div>
                    <div className='R-two'>
                         <div><FaUserCircle/></div>
                         <div onClick={ ()=>router('/AddCart')}><FiShoppingCart /></div>
                    </div>

                    <div className='AddProducts'>
                         <p>Add product </p>
                         <p>LogOut</p>
                    </div>
              </div>
     </div>
    </div>
    
  )
}

export default Navbar




