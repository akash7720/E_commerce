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

   const{}=useContext(MycounterContext);
  
   const {state}=useContext(AuthContext)
   console.log(state,"state");
    


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
       {/* <h2>Home Page:-{state?.user?.name}</h2> */}
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


     <div  className='HomePage'>
      <br/>
         <h2>All Products :-</h2>
          {allProducts.length? 
          
          <div  className="add-products">
           {allProducts.map((productObj)=>(
           <div className="add-product">
             <p><img  className="img-bg" src={productObj.image} /></p> 
               <h3>Name :- {productObj.name}</h3>
              {/* <p>Category :- {productObj.category}</p> */}
              <p>₹{productObj.price}/-</p>
              {/* <p>Total Quantities :- {productObj.quantity}</p> */}
              <p>Tags :- {productObj.tags}</p>
             
              <button onClick={()=>AddToCart(productObj?._id)}  className="addCart-button">Add To Cart</button>
              {/* <button  className="addCart-button">Add To Wishlist</button> */}
           </div>
         ))}
        </div>:

         <div><h1>Loding...</h1></div>}
       
    </div>
     </div>
     
    </div>
  )}

export default Home;




