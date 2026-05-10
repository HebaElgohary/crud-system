import React, { ComponentProps, ComponentType } from 'react'
import Icon from '../atoms/Icon'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'
import Button from '../atoms/Button'

interface MainCardProps 
  {title:string,
    subtitle:string,
    btn:string,
    titleProps:ComponentProps<typeof Title>,
    subtitleProps:ComponentProps<typeof Subtitle>,
    btnProps:ComponentProps<typeof Button>,
    iconProps:ComponentProps<typeof Icon>,
  }

export default function MainCard({title,subtitle,btn,titleProps,subtitleProps,btnProps,iconProps}:MainCardProps) {
  return (
    <div className='flex '>
            <Icon  {...iconProps} />
        <div>
            <Title  {...titleProps}>{title}</Title>
            <Subtitle  {...subtitleProps}>{subtitle}</Subtitle>
            <Button  {...btnProps}>{btn}</Button>
        </div>

    </div>
  )
}
