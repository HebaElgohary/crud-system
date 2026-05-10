import apiClient from "@/src/services/apiClient";
import { editPayload, editResponse } from "../types/types";
export const editUserApi:(id:number,data:editPayload)=>Promise<editResponse>=async(id,data)=>{
return await apiClient.patch<editResponse>(`/users/${id}`,data)
}