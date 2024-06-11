
import {useContext, useEffect} from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AuthDireaction = () => {
    const router= useNavigate();
    const{state} = useContext(AuthContext);

    useEffect(()=>{
      if(state && state?.user === null){
        toast.error("Login to access this page.")
        // console.log(state ,state.user === null);
        return router("/Login")
      }
    },[state]);
};

export default AuthDireaction


