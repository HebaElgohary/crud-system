import React from 'react'
import { useGetUsers } from '../hooks/useGetUsers'
import Table from "../../../components/molecules/Table"

export default function UsersTable  () {
   const{data,isLoading}= useGetUsers()

  return (
    <div>
      {isLoading && <p>Loading...</p>}
        <Table data={data} />
    </div>
  )
}
