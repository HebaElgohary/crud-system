import React, { ComponentType } from 'react'
import FormHeading from './FormHeading'
import { getFormFields } from '@/src/lib/getFormFields'
import FormField from './FormField'
import { formNameType } from '@/src/types/types'
import Button from '../../atoms/Button'

export default function Form({label,icon,formName,btn,layout='rows'}: {layout?:'cols'|'rows',label:string,icon:ComponentType<{size: number, className: string}>,formName:formNameType,btn:string}) {
  return (
    <div className='border border-gray-300 !p-5 rounded-xl !my-5'>
<FormHeading label={label} icon={icon} />

<form action="" className={layout === 'cols' ? 'flex flex-col gap-5 mt-5  ' : 'flex flex-row gap-5 mt-5  '} >
   { getFormFields(formName).map((field)=>
    <FormField key={field.id} {...field} />
   )  }
   <Button variant='violet' className='!mt-3 !mx-3'>{btn}</Button>
</form>
    </div>
  )
}
