import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export const register = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  return response.data;
};

export const verifyOTP = async (otpData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, otpData);
  return response.data;
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `${API_BASE_URL}/auth/logout`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const requestPasswordReset = async (email) => {
  const response = await axios.post(`${API_BASE_URL}/auth/request-password-reset`, { email });
  return response.data;
};

export const confirmPasswordReset = async (resetData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/confirm-password-reset`, resetData);
  return response.data;
};