import { useApiMutation } from "@/src/hooks/useApiMutation";
import { postUserApi } from "../api/postUserApi";
import { useQueryClient } from "@tanstack/react-query";
import { tokenServices } from "@/src/services/tokenService";
import Swal from "sweetalert2";
export const usePostUser = () => {
  const queryClient = useQueryClient();
  return useApiMutation({
    mutationFn: postUserApi,
    options: {


      onSuccess: (data) => {
        tokenServices.setToken(data.accessToken);
        queryClient.invalidateQueries({ queryKey: ["users"] });
            Swal.fire({
      title: "Added!",
      text: "User added successfully",
      icon: "success",
    });
      },
      onError: (error) => {
            Swal.fire({
      title: "Error!",
      text: "Failed to Add user",
      icon: "error",
    });
      }
    },
  });
};
