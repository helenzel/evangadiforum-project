import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3200/api",
  baseURL: "https://evangadiforum.be.helenzelalem.com/api",
});

export default axiosInstance;
