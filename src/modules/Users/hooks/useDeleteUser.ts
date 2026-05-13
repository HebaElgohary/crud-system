import { useApiMutation } from "@/src/hooks/useApiMutation";
import { deleteUserApi } from "../api/deleteUserApi";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteUser=()=>{
    const queryClient = useQueryClient();
    return useApiMutation(
        {mutationFn:(id:number)=>deleteUserApi(id)
        ,options:{
            onSuccess: (data) =>{
            queryClient.invalidateQueries({ queryKey: ["users"] })}
        }
    
})}