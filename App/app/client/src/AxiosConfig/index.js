import axios from "axios";

const api = axios.create({
  baseURL:
  // "https://backend-02-3.onrender.com" ,
//    process.env.ENV==="DEVELOPMENT"
   "http://localhost:3001" ,

  withCredentials:true,
 
});

export default api;

 

