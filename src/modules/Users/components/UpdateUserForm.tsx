'use client'
import UpdateForm from '@/src/components/molecules/form/UpdateForm'
import {useEditUser} from '@/src/modules/Users/hooks/useEditUser'
import {useGetUser} from '@/src/modules/Users/hooks/useGetUser'
import { editPayload } from '../types/types'
import { useEffect, useRef } from 'react'
import { fade } from '@/src/animations/fade'
export default function UpdateUserForm({id}:{id:number}) {
    const {mutate}=useEditUser(id)
    const {data}=useGetUser(id)
    console.log('dataaa user is ',data)
          const cardRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
        if (cardRef.current) {
          fade(cardRef.current);
        }
      }, [data])
        

    const onsubmit=(data:editPayload)=>
        
        { mutate(data)
         }
  return (
    <div>
      {id&& <UpdateForm ref={cardRef} userData={data} userId={id} onSubmit={onsubmit}/>}
    </div>
  )
}
