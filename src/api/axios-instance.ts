import axios from 'axios';

const baseUrl: string = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
