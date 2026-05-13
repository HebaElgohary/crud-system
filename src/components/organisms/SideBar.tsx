import  { useState } from 'react'
import Title from '../atoms/Title'
import Icon from '../atoms/Icon'
import { Users,UserPlus,Settings, MoveLeft, LogOut   } from '../../assets/icons/icons'
import Tab from '../molecules/Tab'

export default function SideBar() {
   const [active, setActive] = useState('users')
  
  return (
    <div className=' hidden md:block  lg:w-1/5 !p-7  border border-gray-300  '>
    {/* heading */}
    <div className='flex gap-2 items-center'>
    <Icon className='ds-text-violet ' Icon={Users} size={30} />
    <Title variant='blue' size='md'>User Management</Title>
</div>

{/* ///////// */}
 
{/* tabs */}
<div className='flex flex-col gap-3 !mt-11'>
<Tab onClick={() => setActive('users')} selected={active === 'users'}  titleProps={{children:'Users',size:'sm'}} iconProps={{Icon:Users,size:20}} />
<Tab onClick={() => setActive('add-user')} selected={active === 'add-user'} titleProps={{children:'Add User',size:'sm'}}  iconProps={{Icon:UserPlus,size:20}}  />
<Tab onClick={() => setActive('settings')} selected={active === 'settings'} iconProps={{Icon:Settings,size:20}}  titleProps={{children:'Settings',size:'sm'}} />
</div>
{/* ////////// */}
<span className='fixed bottom-22 left-14 flex gap-2 items-center ds-text-disabled'> <Icon Icon={LogOut} size={20} />logout </span>

    </div>
  )
}
