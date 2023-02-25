import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://63ee03d35e9f1583bdba5eda.mockapi.io'
});

export default instance;