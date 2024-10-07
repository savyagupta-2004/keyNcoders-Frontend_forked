// src/api/login.js

const API_URL =import.meta.env.VITE_BACKEND_URL; // Replace with your actual API URL

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    // for debugging purpose
    console.log(json);

    if (json.success) {
      //if success then Save the token and redirect
      //double check auth-token
      localStorage.setItem("token", json.token);
    }
    //add else logic here if needed
    else {
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
