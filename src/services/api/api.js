import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",   // <— must match your backend PORT
  headers: { "Content-Type": "application/json" },
});

export default api;

