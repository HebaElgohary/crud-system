import React, { ComponentType } from 'react'
import FormHeading from './FormHeading'
import { getFormFields } from '@/src/lib/getFormFields'
import FormField from './FormField'
import { formNameType } from '@/src/types/types'
import Button from '../../atoms/Button'

export default function Form({label,icon,formName,btn}: {label:string,icon:ComponentType<{size: number, className: string}>,formName:formNameType,btn:string}) {
  return (
    <div>
<FormHeading label={label} icon={icon} />

<form action="" className='flex flex-col gap-2 mt-5 '>
   { getFormFields(formName).map((field)=>
    <FormField key={field.id} {...field} />
   )  }
   <Button variant='violet'>{btn}</Button>
</form>
    </div>
  )
}
