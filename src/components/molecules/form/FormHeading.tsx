import React, { ComponentType } from 'react'
import Icon from '../../atoms/Icon'
import Title from '../../atoms/Title'

export default function FormHeading({label,icon}: {label:string,icon:ComponentType<{size: number, className: string}>}) {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <Icon Icon={icon} className='ds-text-violet' />
        <Title children={label} variant='violet' size='lg'/>
        

    </div>
  )
}
