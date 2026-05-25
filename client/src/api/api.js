import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5500/api",
    withCredentials: true,
    timeout: 1000
});