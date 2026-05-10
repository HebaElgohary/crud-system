import React, { ComponentType } from 'react'
import Icon from '../atoms/Icon'
import Title from '../atoms/Title'

export default function MainCard({title,subtitle,btn,Icon}:{title:string,subtitle:string,btn:string,Icon:ComponentType}) {
  return (
    <div className='flex '>
            <Icon Icon={Icon} />
        <div>
            <Title size='xl' variant='black'>{title}</Title>
        </div>

    </div>
  )
}
