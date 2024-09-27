import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjU3ZTY4ODU5MDA5NTgxZTA5OTEyYyIsImlhdCI6MTcyNzM2NDcxNX0.4jh_3N4Vpmv1sQzzKQkpGEuLU8oicK1ycSTBx-qrFm4";



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
