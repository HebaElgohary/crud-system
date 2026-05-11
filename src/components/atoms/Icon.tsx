import { ComponentType } from 'react'

interface Props 
  {size?: number,
    className?: string,
    Icon:ComponentType<{size: number, className: string, onClick?: React.MouseEventHandler<SVGSVGElement> }>
   onClick?:  React.MouseEventHandler<SVGSVGElement>
  }


export default function Icon({Icon,size=30,className='',onClick}:Props) {

 
  return (
    <div>
        <Icon size={size} className={className} onClick={onClick} /> 
    </div>
  )
}
