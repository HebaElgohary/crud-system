import React from 'react'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'
import {PageHeadingProps} from '../../types/types'
import ThemeToggleButton from './ThemeToggleButton'


export default function PageHeading({title,subtitle}:PageHeadingProps) {
  return (
    <div className='flex flex-row gap-2  border-b border-gray-200 !px-2 !py-4'>
    <div className='flex flex-col gap-2  '>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </div>
    <ThemeToggleButton />
    </div>
  )
}
