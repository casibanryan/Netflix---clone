import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl:"https://api.themoviedb.org/3",
});

export default axiosInstance;