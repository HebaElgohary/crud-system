import React from 'react'
import FormHeading from './form/FormHeading'
import { User } from '../../assets/icons/icons'
import { user } from '@/src/modules/Users/types/types'

export default function DetailsCard({data}:{data:user}) {
  return (
    <div className='flex ds-bg-main !p-5 rounded-xl h-fit flex-col border border-gray-300 '>
        <FormHeading label='User Details' icon={User} iconColor='blue' titleVariant='black'/>
   {/* id */}
    <div className='flex flex-row gap-20 items-center ds-text-black !mb-6'>
<span>ID</span>
<span>{data.id}</span>
    </div>
    {/*name  */}
    <div className='flex flex-row gap-11 items-center ds-text-black !mb-6'>
        <span>Name</span>
        <span>{data.name}</span>
    </div>
    {/* email */}
    <div className='flex flex-row gap-11 items-center ds-text-black !mb-6'>
        <span>Email</span>
        <span>{data.email}</span>
    </div>
    </div>
  )
}
