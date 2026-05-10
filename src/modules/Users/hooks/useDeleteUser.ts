import { useApiMutation } from "@/src/hooks/useApiMutation";
import { deleteUserApi } from "../api/deleteUserApi";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteUser:(id:number)=>void=(id)=>{
    const queryClient = useQueryClient();
    return useApiMutation(
        {mutationFn:deleteUserApi
        ,options:{
            onSuccess: (data) =>{
            queryClient.invalidateQueries({ queryKey: ["users"] })}
        }
    
})}