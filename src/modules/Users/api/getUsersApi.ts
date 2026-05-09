import apiClient from "@/src/services/apiClient";

export const getUsersApi = async () => await apiClient.get("/users");