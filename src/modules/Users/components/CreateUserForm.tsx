'use client'
import {usePostUser} from '@/src/modules/Users/hooks/usePostUser'
import {CreatForm} from '../molecules/form/CreateForm'
export default function CreateUserForm() {
    const {mutate}=usePostUser()
  return (
    <div>CreateUserForm</div>
  )
}
