import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'

export default function FormField(props: any,defaultValue?:any)  {
 const {type}=props
 if (type === 'text' || type === 'email')
    return (
    <TextInput {...props} value={defaultValue}/>

  )
  else if (type === 'password')
    return (
    <PasswordInput {...props} value={defaultValue}/>
  )
 
}
