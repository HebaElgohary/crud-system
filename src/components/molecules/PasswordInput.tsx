import Label from '../atoms/Label'
import Input from '../atoms/Input'
import Password from '../atoms/password'


export default function PasswordInput ({value,name,label,placeholder}:{value?:string,name:string,label:string,placeholder:string}) {
  return (
    <div className='flex flex-col gap-3 '>
     <Label label={label} name={name} />
     <Password name={name} id={name} placeholder={placeholder} value={value} type={'password'}  />
    </div>
  )
}
