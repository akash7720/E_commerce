import React, { useContext } from 'react'
import { AuthContext } from './Context/AuthContext';
import { MycounterContext } from './Context/ProviderCounterContext';
import  { useEffect, useState } from 'react'

import api from '../AxiosConfig/index';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './styles/Home.css'



function  Home () {

  const [allProducts ,setAllProducts] =useState([]);

  const router = useNavigate();

 console.log(allProducts,"allProducts");
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/api/v1/product/get-all-products");
        if (response?.data?.success) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

   const{counter,Increment,Decrement,Reset}=useContext(MycounterContext);
  
   const {state,LOGOUT}=useContext(AuthContext)
   console.log(state,"state");
    
  //  const { theme, toggleTheme } = useContext(ThemeContext);

//   async function AddToCart(productId){
     
//  try {
//   const response  =await api.post("/api/v1/add-to-cart",
//   {userId:state?.user?._id,
//     productId:productId})
  
//     if(response.data.success){
//       toast.success(response.data.message)
      
//     }
//  } catch (error) {
//   console.log(error);
  
//  }
//   }


async function AddToCart(productId) {
  console.log(state, "state?.user?._id");
  if (state?.user?._id === undefined) {
    toast.error("Please login to add products into cart.");
    router("/login");
  }

  try {
    const response = await api.post("/api/v1/user/add-to-cart", {
      userId: state?.user?._id,
      productId: productId,
    });
    if (response.data.success) {
      toast.success(response.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}




  return (
    <div>
       <h2>Home Page:-{state?.user?.name}</h2>
       
       {/* <button onClick={LOGOUT}>LogOut</button> */}
    
       {/* <h2>CounterContext:{counter}</h2> */}
       {/* <button onClick={Increment}>+</button> */}
        {/* <button onClick={Decrement}>-</button> */}
        {/* <button onClick={Reset}>Reset</button><br/> */}
        

         {/* <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p> */}

     <div>


      <div>
           
      </div>


     <div>
      <br/>
         <h2>AllProducts</h2>
          {allProducts.length? 
          
          <div style={{display:"flex" ,flexWrap:"wrap" , justifyContent :"space-around"}}>
           {allProducts.map((productObj)=>(
           <div style={{width :"15%" , border:"2px solid black" , marginBottom:"5%", height:"250px"}}> 
               {/* <img style={{height:"54%" , width:"100%"}} src={productObj.image} /> */}
               <h2>Name :- {productObj.name}</h2>
               {/* <p>image:-{productObj.image}</p> */}
              <p>Category :- {productObj.category}</p>
              <p>Price :- {productObj.price}/-</p>
              <p>Total Quantities :- {productObj.quantity}</p>
              <p>Tags :- {productObj.tags}</p>
              <button onClick={()=>AddToCart(productObj?._id)}>Add To Cart</button>
              <button>Add To Wishlist</button>
           </div>
         ))}
        </div>:

         <div><h1>Loding..</h1></div>}
       
    </div>
     </div>
     
    </div>
  )}

export default Home;




