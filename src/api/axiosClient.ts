// api/axiosClient.ts
import axios from "axios";
import { store } from "../store";

const API_URL = "https://shift-intensive.ru/api/pizza/";

const axiosClient = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use((config) => {
    // const token = store.getState().auth.token; 
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});


axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    },
);

export default axiosClient;
