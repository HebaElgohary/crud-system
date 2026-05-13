import React, { useState } from 'react'
import { Eye, EyeOff } from '../../assets/icons/icons'
import Icon from './Icon'

export default function Password({
  name,
  id,
  type,
  placeholder,
  defaultValue
}: {
  defaultValue?: string
  name: string
  id: string
  type: string
  placeholder: string
}) {

  const [showPassword, setShowPassword] = useState(false)

  return (

    <div
      className='
        border border-gray-400
        !px-4 !py-1
        rounded-md
        flex justify-between items-center

        focus-within:ring-2
        focus-within:ring-violet-400
        focus-within:border-violet-500
      '
    >

      <input
        className='w-full ds-text-black focus:outline-none placeholder:text-gray-400'
        id={id}
        defaultValue={defaultValue}
        name={name}
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
      />

      <Icon
        Icon={showPassword ? EyeOff : Eye}
        className='ds-text-violet cursor-pointer'
        onClick={() => setShowPassword(!showPassword)}
      />

    </div>
  )
}