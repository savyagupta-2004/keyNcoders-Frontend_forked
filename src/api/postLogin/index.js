import axios from 'axios';
import {jwtDecode} from "jwt-decode";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getConsistency = async () => {
    try {
        const access_token = localStorage.getItem("token");

        if (!access_token) {
            throw new Error("Token not found in localStorage");
        }
        const decodedToken = jwtDecode(access_token);
        const user_id = decodedToken?.id; 
       
 
        if (!user_id) {
            throw new Error("User ID not found in the decoded token");
        }
        console.log("before")
        const response = await axios.get(`${BASE_URL}/course/${user_id}/consistencygraph`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json',
            },
        });
 
        return response.data;
    } catch (err) {
        console.error("Error fetching consistency data:", err);
    }
 };

export const getModulesCompleted = async () => {
  try {
    const access_token= localStorage.getItem("token");
 
        if (!access_token) {
            throw new Error("Token not found in localStorage");
        }

        const decodedToken = jwtDecode(access_token);
        const user_id = decodedToken?.id; 

 
        if (!user_id) {
            throw new Error("User ID not found in the decoded token");
        }
 
      const response = await axios.get(`${BASE_URL}/course/${user_id}/modulescompleted`, {
          headers: {
              Authorization: `Bearer ${access_token}`,
              'Content-Type': 'application/json'
          }
        
      });
     return response.data;
  } catch (err) {
      console.error(err);
  }
};

export const getConsistencyPercentage = async () => {
    try {
      const access_token= localStorage.getItem("token");
   
          if (!access_token) {
              throw new Error("Token not found in localStorage");
          }
  
          const decodedToken = jwtDecode(access_token);
          const user_id = decodedToken?.id; 
  
   
          if (!user_id) {
              throw new Error("User ID not found in the decoded token");
          }
   
        const response = await axios.get(`${BASE_URL}/code/${user_id}/consistency`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
          
        });
       return response.data;
    } catch (err) {
        console.error(err);
    }
  };

export const getleaderboard = async () => {
    try {
  
 
   
        const response = await axios.get(`https://knbe.vercel.app/leaderboard`, {
          
        });
       return response.data;
    } catch (err) {
        console.error(err);
    }
  };


