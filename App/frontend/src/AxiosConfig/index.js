import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  // "https://backend-02-3.onrender.com" ,
//    process.env.ENV==="DEVELOPMENT"
  //   ,
//    : "https://awdiz-6-.com"

  withCredentials:true,
 
});

export default api;
