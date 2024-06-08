import mongoose,{Schema} from "mongoose";


const productSchema = new Schema({
    name:String,
    categoty:String,
     price:Number,
      quantity:Number,
})

const ProductSchema = mongoose.model("Product" , productSchema);

export default ProductSchema;