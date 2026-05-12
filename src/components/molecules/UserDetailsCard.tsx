import React from 'react'
import FormHeading from './form/FormHeading'
import { User } from '../../assets/icons/icons'
import { user } from '@/src/modules/Users/types/types'

export default function UserDetailsCard({data}:{data:user}) {
  return (
    <div className='flex flex-col border border-gray-300 '>
        <FormHeading label='User Details' icon={User} iconColor='blue' titleVariant='black'/>
   {/* id */}
    <div className='flex flex-row gap-2 items-center !mb-6'>
<span>ID</span>
<span>{data.id}</span>
    </div>
    {/*name  */}
    <div>
        <span>Name</span>
        <span>{data.name}</span>
    </div>
    {/* email */}
    <div>
        <span>Email</span>
        <span>{data.email}</span>
    </div>
    </div>
  )
}
