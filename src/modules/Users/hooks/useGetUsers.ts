import {getUsersApi} from "../api/getUsersApi";
import {useApiQuery} from "@/src/hooks/useApiQuery"
export const useGetUsers = ()=>{
    return useApiQuery({
        queryKey:['users' ],
        queryFn:getUsersApi
    })}