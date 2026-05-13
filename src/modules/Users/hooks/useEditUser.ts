import { useApiMutation } from "@/src/hooks/useApiMutation";
import {editUserApi} from "../api/editUserApi"
import { useQueryClient } from "@tanstack/react-query";
import { editPayload } from "../types/types";
import Swal from "sweetalert2";
export const useEditUser = (id:number) => {
    const queryClient = useQueryClient();
    return useApiMutation({
        mutationFn:(data:editPayload)=>editUserApi(id,data),
        options: {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["user",id] });
                   Swal.fire({
      title: "Edited!",
      text: "User Updated successfully",
      icon: "success",
    });
            },

  onError: () => {
    Swal.fire({
      title: "Error!",
      text: "Failed to Update user",
      icon: "error",
    });
  },
        },
    });
};