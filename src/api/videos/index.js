import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const access_token = localStorage.getItem("token");



export const getVideos= async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/course/modules`, {
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
