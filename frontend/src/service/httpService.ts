// src/httpProvider.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const http: AxiosInstance = axios.create({
  // TODO: CHECK ENV FIRST IF IN DEV OR PROD AUTO SWITCH TO LOCALHOST IF IN DEV
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//INTERCEPTORS FOR REQUEST
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //TODO: IMPLEMENT JWT TO ADD BEARER TOKEN
    // Example: config.headers.Authorization = `Bearer ${CEB-X-CAP TOKEN}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

//INTERCEPTORS FOR RESPONSE
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default http;
