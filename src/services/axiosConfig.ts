import axios,{AxiosInstance} from "axios";
import {env} from "@/src/config/ENV"

const axiosInstance:AxiosInstance=axios.create({
    baseURL:env.BASE_URL,
    timeout:env.API_TIMEOUT,
    withCredentials:true,
    headers:{"Content-Type":"application/json"
        ,"Accept":"application/json"},
})