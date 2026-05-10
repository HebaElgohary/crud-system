import { useApiMutation } from "@/src/hooks/useApiMutation";
import {editUserApi} from "../api/editUserApi"
import { useQueryClient } from "@tanstack/react-query";
import { editPayload } from "../types/types";
export const useEditUser = (id:number) => {
    const queryClient = useQueryClient();
    return useApiMutation({
        mutationFn:(data:editPayload)=>editUserApi(id,data),
        options: {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["user",id] });
            },
        },
    });
};