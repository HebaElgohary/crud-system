import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'

export default function FormField(props: any)  {
 const {type,defaultValue}=props
 console.log('default values are ',defaultValue)
 if (type === 'text' || type === 'email')
    return (
    <TextInput {...props} defaultValue={defaultValue}/>

  )
  else if (type === 'password')
    return (
    <PasswordInput {...props} defaultValue={defaultValue}/>
  )
 
}
