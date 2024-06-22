// import React, { useContext, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import { AuthContext } from './Context/AuthContext';
// import api from '../AxiosConfig';

// const ProductDetiles = () => {
//   const { state } = useContext(AuthContext);
//   const [productDetails, setProductDetails] = useState([]);

//   useEffect(() => {
//     async function fetchCartProducts() {
//       if (state?.user?._id) {
//         try {
//           const response = await api.get(`/api/v1/user/ProductDetiles/${state.user._id}`);
//           if (response.data.success) {
//             setProductDetails(response.data.ProductDetiles);
//           } else {
//             toast.error(response.data.message);
//           }
//         } catch (error) {
//           console.error(error);
//           toast.error("Failed to fetch cart products.");
//         }
//       } else {
//         toast.error("Please log in to view your cart.");
//       }
//     }

//     fetchCartProducts();
//   }, [state]);

//   return (
//     <div id="cart">
//       <h2>Product Details</h2>
//       {productDetails.length ? (
//         <div>
//           <div className="cart-products">
//             {productDetails.map((product) => (
//               <div key={product._id} className="cart-product">
//                 <p><img className="img" src={product.image} alt={product.name} /></p>
//                 <h3>Name: {product.name}</h3>
//                 <p>Category: {product.category}</p>
//                 <p>Price: {product.price}/-</p>
//                 <p>Quantity: {product.quantity}</p>
//                 <p>Tags: {product.tags.join(", ")}</p>
//                 {/* <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button> */}
//                 <hr />
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>Your cart is empty.</div>
//       )}
//     </div>
//   );
// };

// export default ProductDetiles;