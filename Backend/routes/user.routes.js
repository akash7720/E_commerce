import { Router } from "express";
import {
  login,
  register,
  validateToken,
  Logout,
  addToCart,
  addToWishlist,
  getCartProducts,
  checkout,
  ProductDetiles
} from "../controllers/user.controllers.js";



const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/validate-token", validateToken);
router.get("/logout",Logout);

router.post("/add-to-cart",addToCart);
router.post("/add-to-Wishlist",addToWishlist);



// Add a new route for fetching cart products
router.get("/cart/:userId", getCartProducts);

router.get("/ProductDetiles",ProductDetiles)


// Add the checkout route
router.post("/checkout", checkout);


export default router;