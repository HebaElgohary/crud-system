import apiClient from "@/src/services/apiClient";

interface users{
    name:string
    id:number
    email:string
}[]
export const getUsersApi: () => Promise<users> = async () =>
  {  return  await apiClient.get<users>("/users");}