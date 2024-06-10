import UserSchema from "../models/user.schema.js";
import bcrypr from 'bcrypt'


export const Register=async(req,res)=>{
  // res.send("Register")
  try {
    const{name , email , password ,confirmPassword} = req.body.userData;

    if(!name || !email|| !password || !confirmPassword){
       return res.json({
        success:false ,
         message:"All Fildes are requared"})
    }

    if(password !== confirmPassword){
        return res.json({
          success:false , 
          message:"password and confirmPassword are not matched"})
    }

    const isEmailExist=await UserSchema.findOne({email:email});
  //  console.log(isEmailExist,"isEmailExist");
    if(isEmailExist){
        return res.json({
        success:false
        , message:"Email is allredy exist try new one."})
    }

    const hashedPassword = await bcrypr.hash(password ,10)
    const NewUser = new UserSchema({
       name:name,
       email:email,
       password:hashedPassword
    })
    await NewUser.save();
    // return res.send(NewUser)
    return res.json({ success: true, message: "Registeration Completed." });
    
  } catch (error) {
    console.log(error,"error");
     return res.json({success:false , error})
  }
};



export const Login= async(req,res)=>{
    // res.send("Login.")
    try {
      const{email , password}=req.body;
      if(!email || !password){
       return res.json({
          success:false ,
          message:"All fiildes are requared"})
      }

      const user = await UserSchema.findOne({email:email});

      if(!user){
        return res.json({
          success:false 
          , message:"User not exist, place Check your email.."})
      }

      const isPasswordCorrect = await bcrypr.compare(password,user.password)
        if(!isPasswordCorrect){
          return res.json({
            success:false,
             message:"password is Wrong"})
        }
        return res.json({
          success:true,
           message:"Login Successfully"})
      
      //  console.log(isPasswordCorrect ,"isPasswordCorrect");

    } catch (error) {
      console.log(error);
       return res.json({success:false , error})
    }
};