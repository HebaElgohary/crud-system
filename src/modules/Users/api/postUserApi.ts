import apiClient from "@/src/services/apiClient";
import{user,postPayload,postResponse} from "../types/types"
export const postUserApi:(data:postPayload)=>Promise<postResponse>=async(data)=>
    {return await apiClient.post<postResponse>(`/users`,data)}