import { Sign } from 'crypto'
import React, { ComponentType } from 'react'

interface Props 
  {size?: number,
    className?: string,
    Icon:ComponentType<{size: number, className: string}>
   }

export default function Icon({Icon,size=30,className=''}:Props) {
  return (
    <div>
        <Icon size={size} className={className} /> 
    </div>
  )
}
