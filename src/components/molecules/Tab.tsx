import React, { ComponentType } from 'react'
import Icon from '../atoms/Icon'
import Subtitle from '../atoms/Subtitle'

export default function Tab({icon,title}:{icon:ComponentType<{size: number, className: string, fill: string}>,title:string}) {
  return (
     <div className='flex gap-2 items-center'>
    <Icon className='ds-text-violet ' Icon={icon} size={20} />
    <Subtitle variant='violet' size='sm'>{title}</Subtitle>
</div>
  )
}
