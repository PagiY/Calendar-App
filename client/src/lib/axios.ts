import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:3000',
});

axios.interceptors.request.use();
axios.interceptors.response.use();
