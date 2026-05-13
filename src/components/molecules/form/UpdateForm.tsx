import React from 'react'
import Form from './Form'
import { Edit } from '../../../assets/icons/icons'
import { editPayload } from '@/src/modules/Users/types/types'

type onSubmitType=(data:editPayload)=>void
export default function UpdateForm({onSubmit}:{onSubmit:onSubmitType}) {
  return (
    <div>
    <Form<editPayload> label='Update User'
    layout='cols'
     icon={Edit}
      formName='update'
       btn='Update user'
        onSubmit={onSubmit}/>
    </div>
  )
}
