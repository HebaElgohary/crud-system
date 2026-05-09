import apiClient from "@/src/services/apiClient";
import{user} from "../types/types"
export const getUserApi:(id:number)=>Promise<user>=async(id)=>{
return await apiClient.get<user>(`/users/${id}`)
}