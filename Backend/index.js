import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import ProductSchema from './schemas/product.schema.js';

const app = express();
dotenv.confing();
app.use(express.json());

app.get("/",(req,res)=>{
   res.send("Working..")
})

app.post("/add-product",async(req,res)=>{
    try {
        const {name ,categoty, price, quantity} =req.body;
        if(!name || !categoty || !price  || !quantity){
             return res.json({success:false,error:"All fildes are requared"})
        }
        const newProduct = new ProductSchema({
            name:name ,
            categoty:categoty,
             price:price,
             quantity:quantity
        })
        await newProduct.Save();
        return res.json({success:true ,message:"Produce successfully stored"})

    } catch (error) {
        return res.json({success:false,error})
        
    }

})


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB connected.");
})

app.listen(3001,()=>{
    console.log("Server is running on port 3001..");
})

