import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
import {jwtDecode} from "jwt-decode";

export const updateUser= async (formData)=>{
    try{
      const access_token = localStorage.getItem("token");
      if (!access_token) {
          throw new Error("Token not found in localStorage");
      }
      const decodedToken = jwtDecode(access_token);
      const user_id = decodedToken?.id; 
        const response = await axios.patch(`${BASE_URL}/auth/updateUserProfile/${user_id}`,formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
          
        });
        console.log(response.data);
        
       return response.data;

    }catch(err){
        throw err;
    }
}

export const yearConsistency= async (formData)=>{
  try{
    const access_token = localStorage.getItem("token");
    if (!access_token) {
        throw new Error("Token not found in localStorage");
    }
    const decodedToken = jwtDecode(access_token);
    console.log(access_token);
    const user_id = decodedToken?.id; 
    if(!user_id){
      throw new Error("no user id found");
    }
      const response = await axios.post(`${BASE_URL}/code/${user_id}/yearconsistency`,{}, {
          headers: {
              Authorization: `Bearer ${access_token}`,
              'Content-Type': 'application/json'
          }
        
      });
      console.log(response.data);
      
     return response.data;

  }catch(err){
      throw err;
  }
}
