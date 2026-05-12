import { cn } from '@/src/lib/cn'
import React from 'react'

interface SubtitleProps {
    size?: 'sm' | 'md' | 'xs'
    variant?: 'black' | 'white' | 'disabled'|'violet' |'gray'
    children?: React.ReactNode
    className?: string

}
export default function Subtitle({className,size='sm',variant='black',children}:SubtitleProps) {
 console.log('title is ',children)
  const variants = {
   black: 'ds-text-black',
   white: 'ds-text-white',
   disabled: 'ds-text-disabled',
   violet: 'ds-text-violet',
   gray: 'ds-text-gray',
 }
 const sizes = {
   sm: 'text-sm',
   md: 'text-md',
   xs: 'text-xs',
 }
    return (
    <div className={cn(variants[variant],sizes[size],className)}>{children}</div>
  )
}
