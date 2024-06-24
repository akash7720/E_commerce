import React, { useContext, useEffect, useState } from 'react'
import api from '../../AxiosConfig';
import { AuthContext } from '../Context/AuthContext';

const YourProducts = () => {
    const [allProducts ,setAllProducts] =useState([]);
    const {state} =useContext(AuthContext);

 
 

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.post("/api/v1/product/get-products-by-seller" ,
         {userId:state?.user?._id});

        if (response?.data?.success) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [state]);

  return (
   <div>
    <h2>Your Added Products</h2>
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
              
           </div>
         ))}
        </div>:
  
         <div><h1>Loding..</h1></div>}
       
    </div>
    
  )
}

export default YourProducts