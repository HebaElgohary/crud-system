import React from 'react'

export default function Label({label,name}:{label:string,name:string}) {
  return (
    <label className='font-bold text-lg ds-text-black' htmlFor={name}>{label}</label>
  )
}
