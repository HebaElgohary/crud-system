import React from 'react'
import { useGetUsers } from '../hooks/useGetUsers'
import Table from "../../../components/molecules/Table"
import {useDeleteUser} from "../hooks/useDeleteUser"
export default function UsersTable  ({setSelectedUserId,setViewId}:{setViewId:React.Dispatch<React.SetStateAction<number | null>>,setSelectedUserId:React.Dispatch<React.SetStateAction<number | null>>}) {
   const{data,isLoading}= useGetUsers()
   const {mutate}=useDeleteUser()
   const handleDelete=(id:number)=>{mutate(id)}
  return (
    <div className='flex flex-col gap-5 '>
      {isLoading && <p>Loading...</p>}
        <Table data={data} setViewId={setViewId} setSelectedUserId={setSelectedUserId} onDelete={handleDelete}/>
    </div>
  )
}
