import { ComponentType } from 'react'

interface Props 
  {size?: number,
    className?: string,
    fill?: 'blue'|'green'|'violet'|'warning'|'danger'|'none',
    Icon:ComponentType<{size: number, className: string, fill: string}>
   }


export default function Icon({Icon,size=30,className='',fill='none'}:Props) {
 const fills={
  blue: 'ds-text-blue',
  green: 'ds-text-green',
  violet: 'ds-text-violet',
  
  warning: 'ds-text-warning',
  danger: 'ds-text-danger',
  none: 'none'

 }
 
  return (
    <div>
        <Icon size={size} className={className} fill={fills[fill]} /> 
    </div>
  )
}
