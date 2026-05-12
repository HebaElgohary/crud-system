import React, { ComponentType } from 'react'
import FormHeading from './FormHeading'
import { getFormFields } from '@/src/lib/getFormFields'
import FormField from './FormField'
import { formNameType } from '@/src/types/types'
import Button from '../../atoms/Button'

export default function Form({label,icon,formName,btn,layout='rows'}: {layout?:'cols'|'rows',label:string,icon:ComponentType<{size: number, className: string}>,formName:formNameType,btn:string}) {
  return (
    <div className='border border-gray-300 ds-bg-violet-200 !p-5 rounded-xl !my-5 '>
<FormHeading label={label} icon={icon} />

<form action="" className={layout === 'cols' ? 'flex flex-col gap-5 mt-5  ' : 'flex flex-col lg:flex-row gap-5 mt-5 items-stretch  lg:items-end '} >
   { getFormFields(formName).map((field)=>
    <FormField key={field.id} {...field} />
   )  }
   <div>
   <Button variant='violet' size='sm' className='!mt-1 !mx-3'>{btn}</Button>
</div>
</form>
    </div>
  )
}
