import PasswordInput from '../PasswordInput'
import TextInput from '../TextInput'

export default function FormField(props: any) {
 const {type}=props
 if (type === 'text' || type === 'email')
    return (
    <TextInput {...props} />

  )
  else if (type === 'password')
    return (
    <PasswordInput {...props} />
  )
 
}
