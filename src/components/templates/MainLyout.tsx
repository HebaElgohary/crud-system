import React, { ReactNode } from 'react'
import SideBar from '../organisms/SideBar'

export default function MainLyout({children}:{children:ReactNode}) {
  return (
    <div className='flex '>
        <SideBar/>
        <div className=' flex flex-col w-full gap-5 !mx-5 !my-5'>
        {children}
        </div>
    </div>
  )
}
