// src/server/api.js ou onde você configura o Axios
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // ou a URL do seu backend
});

export default api;
