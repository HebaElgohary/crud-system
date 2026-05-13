import React, { forwardRef } from 'react'
import Form from './Form'
import { Edit } from '../../../assets/icons/icons'
import { editPayload, user } from '@/src/modules/Users/types/types'

type onSubmitType = (data: editPayload) => void

interface Props {
  userId: number
  onSubmit: onSubmitType
  userData: user | undefined
}

const UpdateForm = forwardRef<HTMLDivElement, Props>(
  ({ onSubmit, userId, userData }, ref) => {

    console.log('data in updateForm is', userData)

    return (
      <div ref={ref}>
        <Form<editPayload>
          label='Update User'
          layout='cols'
          icon={Edit}
          userId={userId}
          userData={userData}
          formName='update'
          btn='Update user'
          onSubmit={onSubmit}
        />
      </div>
    )
  }
)

UpdateForm.displayName = 'UpdateForm'

export default UpdateForm