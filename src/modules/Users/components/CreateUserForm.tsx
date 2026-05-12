'use client'
import {usePostUser} from '@/src/modules/Users/hooks/usePostUser'
import CreateForm from '../../../components/molecules/form/CreateForm'
export default function CreateUserForm() {
    const {mutate,isPending}=usePostUser()
   const handleSubmit = (formData: {
    name: string
    email: string,
    password: string
  }) => {
    mutate(formData)
  }
  return (
    <CreateForm onSubmit={mutate}/>
  )
}
