import axios from 'axios';
const BASE_URL = "https://knbe.vercel.app";
const C_id = "course123";
const access_token = localStorage.getItem("token");

export const getQuestions = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/course/questionlist?C_id=Work101`, 
            { C_id }, 
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log(response.data);
        return response.data;

    } catch (err) {
        console.error("Error fetching questions:", err);
        return null; 
    }
};

