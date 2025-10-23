import axios from "axios";

 const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { "Content-Type": "applicartion/json" },
 });

 export default api;
