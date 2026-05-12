import axios,{AxiosInstance} from "axios";
import {env} from "@/src/config/ENV"
import { tokenServices } from "./tokenService";


//axios instance configuration
export const axiosInstance:AxiosInstance=axios.create({
    baseURL:env.BASE_URL,
    timeout:env.API_TIMEOUT,
    // withCredentials:true, //browser sends cookies automatically
    headers:{"Content-Type":"application/json"
        ,"Accept":"application/json"},
})
////////////////////////////////////


// request interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = tokenServices.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });