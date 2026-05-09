import apiClient from "@/src/services/apiClient";

export const deleteUserApi:(id:number)=>Promise<void> = async(id) =>
    {return await apiClient.delete<void>(`/users/${id}`)}