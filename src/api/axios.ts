import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_NODE_SERVER_URL,
});

export default api;