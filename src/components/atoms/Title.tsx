import { cn } from '@/src/lib/cn'
import React from 'react'

interface TitleProps {
    size?: 'lg' | 'xl' | 'xxl'|'md'|'sm'
    variant?: 'black' | 'white'|'blue'
    children?: React.ReactNode

}
export default function Title({size='lg',variant='black',children}:TitleProps) {
 const variants = {
   black: 'ds-text-black',
   white: 'ds-text-white',
   blue: 'ds-text-blue',
 }
 const sizes = {
   xl: 'text-xl',
   xxl: 'text-xxl',
   lg: 'text-lg',
   md: 'text-md',
   sm: 'text-sm',
 }
    return (
    <div className={cn(variants[variant],sizes[size],'font-bold')}>{children}</div>
  )
}
