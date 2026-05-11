import React from 'react'

export default function Input({name,id,type}:{name:string,id:string,type:string}) {
  return (
    <input id={id} type={type} className='border border-gray-400 !px-4 !py-2 rounded-md'  />
  )
}
