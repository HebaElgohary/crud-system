import React, { useState } from 'react'
import { useGetUsers } from '../hooks/useGetUsers'
import Table from "../../../components/molecules/Table"
import {useDeleteUser} from "../hooks/useDeleteUser"
export default function UsersTable  ({setSelectedUserId,setViewId}:{setViewId:React.Dispatch<React.SetStateAction<number | null>>,setSelectedUserId:React.Dispatch<React.SetStateAction<number | null>>}) {
   
  const{data,isLoading}= useGetUsers()
   const {mutate}=useDeleteUser()
   const handleDelete=(id:number)=>{mutate(id)}
 //////////////////////////
    const USERS_PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(1);

  // total pages
const totalPages = Math.ceil((data?.length || 0) / USERS_PER_PAGE);
  // slice users for current page
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;

  const paginatedUsers = data?.slice(startIndex, endIndex);

   return (
    <div className='flex flex-col gap-5 '>
      {isLoading && <p>Loading...</p>}
        <Table data={paginatedUsers} setViewId={setViewId} setSelectedUserId={setSelectedUserId} onDelete={handleDelete}/>
   
      {/* Pagination */}
    {data &&  <div className="flex gap-2 justify-center">
        {Array.from({ length : totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`!px-4 !py-2 border rounded ${
              currentPage === index + 1
                ? 'bg-violet-500 text-white'
                : 'bg-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>}
    </div>
  )
}
