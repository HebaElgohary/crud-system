import React from 'react'
import Form from './Form'
import { Edit } from '../../../assets/icons/icons'
import { editPayload, user } from '@/src/modules/Users/types/types'

type onSubmitType=(data:editPayload)=>void
export default function UpdateForm({onSubmit,userId,userData}:{userId:number,onSubmit:onSubmitType,userData:user|undefined}) {
  return (
    <div>
    <Form<editPayload> label='Update User'
    layout='cols'
     icon={Edit}
      userId={userId}
       userData={userData}
      formName='update'
       btn='Update user'
        onSubmit={onSubmit}/>
    </div>
  )
}
