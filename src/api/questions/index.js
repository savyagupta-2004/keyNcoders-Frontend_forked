import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getQuestions = async () => {
   try {
    const access_token = (localStorage.getItem("token"));
       const response = await axios.get(`${BASE_URL}/course/questionlist`, {
           headers: {
               Authorization: `Bearer ${access_token}`,
               'Content-Type': 'application/json'
           }
         
       });
       console.log(response.data);

      return response.data;
   } catch (err) {
       console.error(err);
   }
};


