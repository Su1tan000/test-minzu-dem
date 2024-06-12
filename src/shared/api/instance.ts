import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6651b06b20f4f4c442786ba8.mockapi.io',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
