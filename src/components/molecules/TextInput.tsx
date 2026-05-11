import React from 'react'
import Label from '../atoms/Label'
import Input from '../atoms/Input'

export default function TextInput ({name,label}:{name:string,label:string}) {
  return (
    <div className='flex flex-col gap-2'>
     <Label label={label} name={name} />
     <Input name={name} id={name}  type={'text'}  />
    </div>
  )
}
