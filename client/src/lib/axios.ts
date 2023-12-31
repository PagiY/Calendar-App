import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http:localhost:8000',
});

axios.interceptors.request.use();
axios.interceptors.response.use();
