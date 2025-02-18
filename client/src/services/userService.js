import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export const getUserData = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_BASE_URL}/user/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};