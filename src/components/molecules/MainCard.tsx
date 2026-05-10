import React, { ComponentProps, ComponentType } from 'react'
import Icon from '../atoms/Icon'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'
import Button from '../atoms/Button'

interface MainCardProps 
  {title:string,
    subtitle:string,
    Icon:ComponentType,
    btn:string,
    titleProps:ComponentProps<typeof Title>,
    subtitleProps:ComponentProps<typeof Subtitle>,
    btnProps:ComponentProps<typeof Button>,
  }

export default function MainCard({title,subtitle,btn,Icon,titleProps,subtitleProps,btnProps}:MainCardProps) {
  return (
    <div className='flex '>
            {/* <Icon Icon={Icon} /> */}
        <div>
            <Title  {...titleProps}>{title}</Title>
            <Subtitle  {...subtitleProps}>{subtitle}</Subtitle>
            <Button  {...btnProps}>{btn}</Button>
        </div>

    </div>
  )
}
