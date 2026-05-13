'use client'
import UpdateForm from '@/src/components/molecules/form/UpdateForm'
import {useEditUser} from '@/src/modules/Users/hooks/useEditUser'
import {useGetUser} from '@/src/modules/Users/hooks/useGetUser'
import { editPayload } from '../types/types'
export default function UpdateUserForm({id}:{id:number}) {
    const {mutate}=useEditUser(id)
    const {data}=useGetUser(id)
    console.log('dataaa user is ',data)

    const onsubmit=(data:editPayload)=>
        
        { mutate(data)
         }
  return (
    <div>
      {id&& <UpdateForm userData={data} userId={id} onSubmit={onsubmit}/>}
    </div>
  )
}
