import React from 'react'

export default function Label({label,name}:{label:string,name:string}) {
  return (
    <label className='font-bold text-lg' htmlFor={name}>{label}</label>
  )
}
