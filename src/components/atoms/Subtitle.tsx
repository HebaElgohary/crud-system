import { cn } from '@/src/lib/cn'
import React from 'react'

interface SubtitleProps {
    size: 'sm' | 'md' | 'xs'
    variant: 'black' | 'white' | 'disabled'
    children: React.ReactNode

}
export default function Subtitle({size,variant,children}:SubtitleProps) {
 const variants = {
   black: 'ds-text-black',
   white: 'ds-text-white',
   disabled: 'ds-text-disabled',
 }
 const sizes = {
   sm: 'text-sm',
   md: 'text-md',
   xs: 'text-xs',
 }
    return (
    <div className={cn(variants[variant],sizes[size],)}>{children}</div>
  )
}
