'use client'
import UpdateForm from '@/src/components/molecules/form/UpdateForm'
import {useEditUser} from '@/src/modules/Users/hooks/useEditUser'
import { editPayload } from '../types/types'
export default function UpdateUserForm({id}:{id:number}) {
    const {mutate}=useEditUser(id)
    const onsubmit=(data:editPayload)=>
        
        { mutate(data)
            alert('User updated successfully')
         }
  return (
    <div>
        {id&& <UpdateForm onSubmit={onsubmit}/>}
    </div>
  )
}
