import apiClient from "@/src/services/apiClient";
import{user} from "../types/types"

export const getUsersApi: () => Promise<user[]> = async () =>
  {  return  await apiClient.get<user[]>("/users");}