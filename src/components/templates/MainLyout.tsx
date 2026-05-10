import React, { ReactNode } from 'react'
import SideBar from '../organisms/SideBar'

export default function MainLyout({children}:{children:ReactNode}) {
  return (
    <div className='flex '>
        <SideBar/>
        {children}
    </div>
  )
}
