import React from 'react'
import Title from '../atoms/Title'
import Icon from '../atoms/Icon'
import { Users,UserPlus,Settings   } from '../../assets/icons/icons'
import Tab from '../molecules/Tab'

export default function SideBar() {
  return (
    <div className='hidden md:block md:w-1/4 !p-5 '>
    {/* heading */}
    <div className='flex gap-2 items-center'>
    <Icon className='ds-text-violet ' Icon={Users} size={20} />
<Title variant='blue' size='sm'>User Management</Title>
</div>

{/* ///////// */}
 
{/* tabs */}
<div className='flex flex-col gap-3 !mt-11'>
<Tab icon={Users} title='Users' />
<Tab icon={UserPlus} title='Add user' />
<Tab icon={Settings} title='Settings' />
</div>
{/* ////////// */}

    </div>
  )
}
