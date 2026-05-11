import React from 'react'
import Title from '../atoms/Title'
import Icon from '../atoms/Icon'
import { Users } from '../../assets/icons/icons'

export default function SideBar() {
  return (
    <div className='hidden md:block md:w-1/4 !p-5 '>
    {/* heading */}
    <div className='flex gap-2 items-center'>
    <Icon className='ds-text-violet ' Icon={Users} size={20} />
<Title variant='blue' size='sm'>User Management</Title>
</div>

{/* ///////// */}
   <div className='flex gap-2 items-center'>
    <Icon className='ds-text-violet ' Icon={Users} size={20} />
<Title variant='blue' size='sm'>User Management</Title>
</div>
{/* tabs */}


{/* ////////// */}

    </div>
  )
}
