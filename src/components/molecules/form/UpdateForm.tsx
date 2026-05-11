import React from 'react'
import Form from './Form'
import { Edit } from '../../../assets/icons/icons'

export default function UpdateForm() {
  return (
    <div>
    <Form label='Update User'
    layout='cols'
     icon={Edit}
      formName='update'
       btn='Update user'/>
    </div>
  )
}
