import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instalura-api.vercel.app/api',
});

export default api;
