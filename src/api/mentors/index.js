import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const access_token = localStorage.getItem("token");

export const getMentor= async () => {
  try {
      const response = await axios.get(`${BASE_URL}/course/mentors/66f66ef65abd91fb2e2ac3fb`, {
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
