import  { ComponentType } from 'react'
import Icon from '../../atoms/Icon'
import Title from '../../atoms/Title'

type iconColorType = 'green' | 'blue' | 'violet' | 'warning' | 'danger'
type titleVariantType = 'green' | 'blue' | 'violet' | 'warning' | 'danger'

export default function FormHeading({titleVariant='violet',label,icon,iconColor='violet'}: {titleVariant?:titleVariantType,iconColor?:iconColorType,label:string,icon:ComponentType<{size: number, className: string}>}) {
 const iconBgs = {
    green: "ds-text-green",
    blue: "ds-text-blue",
    violet: "ds-text-violet",
    warning: "ds-text-warning",
    danger: "ds-text-danger",
 }
  return (
    <div className='flex flex-row gap-2 items-center !mb-6'>
        <Icon Icon={icon} className={`${iconBgs[iconColor]}`} size={30} />
        <Title children={label} variant={titleVariant} size='lg'/>
    </div>
  )
}
