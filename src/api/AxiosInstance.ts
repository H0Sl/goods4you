import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000, // Таймаут запроса
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
