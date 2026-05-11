import Form from './Form'
import { UserPlus } from '../../../assets/icons/icons'

export default function CreateForm() {
  return (
    <div>
    <Form label='Create New User'
    layout='rows'
     icon={UserPlus}
      formName='create'
       btn='Create User'/>
    </div>
  )
}
