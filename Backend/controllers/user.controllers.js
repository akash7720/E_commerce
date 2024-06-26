

// import UserSchema from "../schemas/user.schema.js";
import UserSchema from "../schemas/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
    try {
      const { name, email, password, confirmPassword,role } = req.body.userData;
      if (!name || !email || !password || !confirmPassword || !role) {
        return res.json({ success: false, message: "All fields are required." });
      }
      if (password !== confirmPassword) {
        return res.json({
          success: false,
          message: "Password and Confirm is not matched.",
        });
      }
  
      const isEmailExists = await UserSchema.findOne({ email: email });
      // console.log(isEmailExists, "isEmailExists");
      if (isEmailExists) {
        return res.json({
          success: false,
          message: "Email is alreadly exist, Please use another one.",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // 1st type to store data in mongodb
      // const newUser = await UserSchema.create({
      //   name: name,
      //   email: email,
      //   password: hashedPassword,
      // });
  
      // 2nd type to store data in mongodb
      const newUser = new UserSchema({
        name: name,
        email: email,
        password: hashedPassword,
        role : role,
      });
  
      await newUser.save();
  
      return res.json({ success: true, message: "Registeration Completed." });
    } catch (error) {
      console.log(error, "error");
      return res.json({ error, success: false });
    }
  };
  

export const login = async (req, res) => {
    try {
      const { email, password } = req.body.userData;
      if (!email || !password) {
        return res.json({ success: false, message: "All fields are required." });
      }
  
      const user = await UserSchema.findOne({ email: email });
      if (!user) {
        return res.json({
          success: false,
          message: "User not exist, Please check your email.",
        });
      }
  
      // console.log(user, "user");
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      
      if (!isPasswordCorrect) {
        return res.json({
          success: false,
          message: "Password is wrong.",
        });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      console.log(token, "token");
      // token -> cookie -> localStorage, cookies
      // userData  -> context -> context, redux
      // compare user password with stored password in db

      
      res.cookie("token", token);
      return res.json({
        success: true,
        message: "Login Successfull.",
        userData: {name: user.name, email:user.email, role :user.role, _id : user._id, },
        });
        
       
    } catch (error) {
      console.log(error, "error");
      return res.json({ error, success: false });


    }
  };


export const validateToken = async (req, res) => {
    try {
      const token = req?.cookies?.token;
      if (!token) {
        return res.json({
          success: false,
          message: "Token not found.",
        });
      }
      const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decodedData);
      if (!decodedData.id) {
        return res.json({
          success: false,
          message: "Token is expired.",
        });
      }
  
      const user = await UserSchema.findById(decodedData.id);
  
      // console.log(user);
      if (!user) {
        return res.json({
          success: false,
          message: "Token is not valid.",
        });
      }
  
      return res.json({ user, success: true });
    } catch (error) {
      console.log(error, "error");
      return res.json({ error, success: false });
    }
  };

  export const Logout = async (req,res) =>{
    try {
      res.cookie("token","");
      return res.json({success : true, message : " Logout Successful"})
    }catch (error){
      console.log(error,"error");
      return res.json({error,success : false});
    }
  };


  
  export const addToCart = async (req,res) => {
    try{
      const { userId,productId } = req.body;
      const user = await UserSchema.findByIdAndUpdate(
        userId,
        {
          $addToSet : {cart : productId},
        },
        
        {new:true}
        );
      if(!user){
        return res.json({success : false, message :"User Not Found"});
      }
      console.log(user,"user");
      return res.json ({success: true,message:"Product Successfully Added To Cart"})
    }catch (error) {
      console.log(error,"error");
      return res.json ({error, success : false});
    }
  };
  
  
  
  export const addToWishlist = async (req,res) => {
    try{
      const { userId,productId } = req.body;
      const user = await UserSchema.findByIdAndUpdate(
        userId,
        {
          $addToSet : {wishlist : productId},
        },
        
        {new:true}
        );
      if(!user){
        return res.json({success : false, message :"User Not Found"});
      }
      console.log(user,"user");
      return res.json ({success: true,message:"Product Successfully Added To Wishlist"})
    }catch (error) {
      console.log(error,"error");
      return res.json ({error, success : false});
    }
  };



  export const getCartProducts = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const user = await UserSchema.findById(userId).populate("cart");
      if (!user) {
        return res.json({ success: false, message: "User not found." });
      }
  
      return res.json({ success: true, cart: user.cart });
    } catch (error) {
      console.log(error, "error");
      return res.json({ error, success: false });
    }
  };

  export const ProductDetiles = async (req, res) => {
    try {
      const { userId } = req.body;
  
      const user = await UserSchema.findByIdAndUpdate(
        userId,
        { $set: { ProductDetilest: [] } },
        { new: true }
      );
  
      if (!user) {
        return res.json({ success: false, message: "User not found." });
      }
  
      return res.json({ success: true, message: "Get Product Detiles." });
    } catch (error) {
      console.log(error, "error");
      return res.json({ error, success: false });
    }
  };





  // Add the checkout function
  
export const checkout = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await UserSchema.findByIdAndUpdate(
      userId,
      { $set: { cart: [] } },
      { new: true }
    );

    if (!user) {
      return res.json({ success: false, message: "User not found." });
    }

    return res.json({ success: true, message: "Items successfully checked out." });
  } catch (error) {
    console.log(error, "error");
    return res.json({ error, success: false });
  }
};