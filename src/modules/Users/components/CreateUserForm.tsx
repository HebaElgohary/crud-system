'use client'
import {usePostUser} from '@/src/modules/Users/hooks/usePostUser'
import CreateForm from '../../../components/molecules/form/CreateForm'
import {  postPayload } from '../types/types'
export default function CreateUserForm() {
    const {mutate,isPending}=usePostUser()

    type handleSubmitType=(formData:postPayload)=>void

   const handleSubmit:handleSubmitType = (formData) => {
    mutate(formData )
  }
  return (
    <CreateForm onSubmit={handleSubmit}/>
  )
}
