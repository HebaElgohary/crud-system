import { useApiMutation } from "@/src/hooks/useApiMutation";
import { postUserApi } from "../api/postUserApi";
import { useQueryClient } from "@tanstack/react-query";
import{tokenServices} from "../../../services/tokenService"
export const usePostUser = () => {
  const queryClient = useQueryClient();
  return useApiMutation({
    mutationFn: postUserApi,
    options: {

      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    },
  });
};
