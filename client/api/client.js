import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.172:3000/', // If testing on a device, use PC's IP address
});

export default api;