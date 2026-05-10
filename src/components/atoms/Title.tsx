import { cn } from '@/src/lib/cn'
import React from 'react'

interface TitleProps {
    size: 'sm' | 'md' | 'lg'
    variant: 'black' | 'white'
    children: React.ReactNode

}
export default function Title({size,variant,children}:TitleProps) {
 const variants = {
   black: 'ds-text-black',
   white: 'ds-text-white',
 }
 const sizes = {
   sm: 'text-sm',
   md: 'text-md',
   lg: 'text-lg',
 }
    return (
    <div className={cn(variants[variant],sizes[size])}>{children}</div>
  )
}
