import React, { useState } from 'react'
import {Eye, EyeOff} from '../../assets/icons/icons'
import Icon from './Icon'
export default function Password({name,id,type,placeholder}:{name:string,id:string,type:string,    placeholder:string}) {
   const [showPassword, setShowPassword] = useState(false);
    return (
    <div className='border border-gray-400 !px-4 !py-2 rounded-md flex justify-between'>
    <input id={id} name={name} type={showPassword ? 'text' : type} placeholder={placeholder}  />
    {/* <button type='button' onClick={() => setShowPassword(!showPassword)} className='p-0 bg-transparent border-0'> */}
      <Icon Icon={showPassword ? EyeOff : Eye} className='ds-text-violet' onClick={()=>setShowPassword(!showPassword)}/>
    {/* </button> */}
  </div>
  )
}
