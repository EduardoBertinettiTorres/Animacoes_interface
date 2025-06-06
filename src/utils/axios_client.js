import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api',
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response; 
  },
  (error) => {
    const { response } = error;

    if (response?.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("CURRENT_USER");

     
      window.location.href = "/"; 
    }

  
    return Promise.reject(error);
  }
);

export default axiosClient;
