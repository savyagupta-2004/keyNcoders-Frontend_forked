import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const C_id="course123"
export const getQuestions = async () => {
   try {
       const access_token = localStorage.getItem("token");

       const response = await axios.get(`${BASE_URL}/course/questionlist`, 
           { C_id }, // Pass cid in the request body
           {
               headers: {
                   Authorization: `Bearer ${access_token}`,
                   'Content-Type': 'application/json'
               }
           }
       );

       console.log(response.data);
       return response.data;

   } catch (err) {
       console.error("Error fetching questions:", err);
       return null; // Handle the error by returning null or an empty array
   }
};
