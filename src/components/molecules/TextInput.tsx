import Label from '../atoms/Label'
import Input from '../atoms/Input'

export default function TextInput ({name,label,placeholder,defaultValue}:{defaultValue?:string,name:string,label:string,placeholder:string}) {
  return (
    <div className='flex flex-col gap-3 '>
     <Label label={label} name={name} />
     <Input name={name} id={name} placeholder={placeholder} defaultValue={defaultValue}  type={'text'}  />
    </div>
  )
}
