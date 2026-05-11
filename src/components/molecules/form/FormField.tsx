import TextInput from '../TextInput'

export default function FormField(props: any) {
 const {type}=props
 if (type === 'text')
    return (
    <TextInput {...props} />
  )
  else
  return (
    <div>Form Field</div>
  )
}
