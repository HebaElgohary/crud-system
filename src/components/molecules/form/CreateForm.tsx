import Form from './Form'
import { UserPlus } from '../../../assets/icons/icons'
import { postPayload} from "../../../modules/Users/types/types"
type onSubmitType=(formData:postPayload)=>void
export default function CreateForm({onSubmit}:{onSubmit:onSubmitType}) {
  return (
    <div>
    <Form<postPayload> label='Create New User'
    layout='rows'
     icon={UserPlus}
      formName='create'
       btn='Create User'
        onSubmit={onSubmit}/>
     
    </div>
  )
}
