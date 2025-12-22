import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Automatically attach admin token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
