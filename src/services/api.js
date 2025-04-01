import axios from 'axios';

// Định nghĩa URL cơ bản của JSON Server
const API_BASE_URL = 'http://192.168.1.11:3000';

// API cho Sign Up
export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// API cho Sign In
export const signIn = async (email, password) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      params: {
        email,
        password,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
