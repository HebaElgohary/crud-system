import { useApiMutation } from "@/src/hooks/useApiMutation";
import { deleteUserApi } from "../api/deleteUserApi";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

export const useDeleteUser=()=>{
    const queryClient = useQueryClient();
    return useApiMutation(
        {mutationFn:(id:number)=>deleteUserApi(id)
        ,options:{
            onSuccess: (data) =>{
            queryClient.invalidateQueries({ queryKey: ["users"] })
            Swal.fire({
                title: "Deleted!",
                text: "User deleted successfully",
                icon: "success",
            })
        }
        ,
        onError: () => {
            Swal.fire({
                title: "Error!",
                text: "Failed to delete user",
                icon: "error",
            });
        }
    
}
})}